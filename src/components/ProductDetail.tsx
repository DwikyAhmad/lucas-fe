"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/footer";
import { formatRupiah } from "@/utils/utils";
import { OctagonAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    type: string;
    composition: string[];
    image: string;
    categoryNames: string[];
    packaging: string;
    productBy: string;
    prescription: boolean;
}

const WarningContainer = () => (
    <div className="bg-red-100 border border-red-300 p-6 rounded-xl flex flex-col items-center gap-4 my-4">
        <OctagonAlert className="text-red-600" size={48} />
        <div className="text-red-800 text-lg font-semibold text-center">
            Produk tidak dijual online karena membutuhkan resep dokter
        </div>
    </div>
);

const StockBadge = ({ stock }: { stock: number }) => (
    <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            stock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
        }`}
    >
        {stock > 0 ? `In Stock: ${stock}` : "Out of Stock"}
    </span>
);

const PrescriptionBadge = () => (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-200 text-red-800 ml-2">
        Prescription Required
    </span>
);

const CategoryPills = ({ categories }: { categories: string[] }) => (
    <div className="flex flex-wrap gap-2 mb-3">
        {categories.map((cat, idx) => (
            <span
                key={idx}
                className="bg-primaryBlueNavy text-white px-3 py-1 rounded-full text-xs font-medium"
            >
                {cat}
            </span>
        ))}
    </div>
);

const InfoCard = ({
    title,
    children,
    icon,
}: {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}) => (
    <div className="bg-gray-50 rounded-xl p-4 shadow flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2 mb-1 text-primaryBlueNavy font-semibold text-lg">
            {icon}
            {title}
        </div>
        <div className="text-gray-700 text-sm md:text-base">{children}</div>
    </div>
);

const CheckoutContainer = ({
    product,
    quantity,
}: {
    product: Product;
    quantity: number;
}) => {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-3 w-full mt-4">
            <button
                className="w-full bg-primaryYellow text-primaryBlueNavy font-bold py-3 rounded-lg shadow hover:bg-yellow-400 transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                onClick={() =>
                    router.push(
                        `/products/${product?.id}/checkout?qty=${quantity}`
                    )
                }
                disabled={product.stock === 0 || quantity < 1}
            >
                Checkout {quantity > 1 ? `(${quantity} items)` : ""}
            </button>
            <div className="flex gap-2 justify-center">
                {/* Marketplace buttons can go here */}
            </div>
        </div>
    );
};

const CheckoutAndWarningContainer = ({
    product,
    quantity,
}: {
    product: Product;
    quantity: number;
}) =>
    product.prescription ? (
        <WarningContainer />
    ) : (
        <CheckoutContainer product={product} quantity={quantity} />
    );

export default function ProductDetail({ product }: { product: Product }) {
    console.log(product);
    const productId = product?.id || "Unknown Product Id";
    const [quantity, setQuantity] = useState(1);
    const maxQty = product?.stock || 0;

    const handleQtyChange = (val: number) => {
        if (val < 1) setQuantity(1);
        else if (val > maxQty) setQuantity(maxQty);
        else setQuantity(val);
    };

    return (
        <div className="bg-primaryBlueNavy min-h-screen font-poppins">
            <Navbar />
            <main className="flex flex-col items-center min-h-screen w-full bg-primaryBlueNavy py-5 justify-center">
                <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row gap-8 p-6 md:p-10">
                    {/* Product Image */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <Image
                            src={
                                product.image ||
                                "https://i.pinimg.com/564x/d3/d7/c3/d3d7c3ff6bda3ac7a2d27537658300b6.jpg"
                            }
                            alt={`Product Image id-${productId}`}
                            width={150}
                            height={150}
                            className="rounded-xl object-contain w-full max-w-xs h-auto bg-gray-100"
                        />
                        <div className="mt-4 flex gap-2 items-center">
                            <StockBadge stock={product?.stock ?? 0} />
                            {product?.prescription && <PrescriptionBadge />}
                        </div>
                        {/* Quantity Input */}
                        <div className="flex items-center gap-2 mt-6">
                            <span className="text-sm font-medium text-primaryBlueNavy">
                                Quantity:
                            </span>
                            <button
                                className="text-primaryBlueNavy w-8 h-8 rounded bg-gray-200 text-lg font-bold flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
                                onClick={() => handleQtyChange(quantity - 1)}
                                disabled={quantity <= 1}
                                aria-label="Decrease quantity"
                            >
                                -
                            </button>
                            <input
                                type="number"
                                min={1}
                                max={maxQty}
                                value={quantity}
                                onChange={(e) =>
                                    handleQtyChange(Number(e.target.value))
                                }
                                className="w-14 text-center text-primaryBlueNavy border border-gray-300 rounded px-2 py-1 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-primaryBlueNavy"
                                disabled={maxQty === 0}
                            />
                            <button
                                className="text-primaryBlueNavy w-8 h-8 rounded bg-gray-200 text-lg font-bold flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
                                onClick={() => handleQtyChange(quantity + 1)}
                                disabled={quantity >= maxQty}
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-primaryBlueNavy mb-2">
                                {product?.name || "Loading..."}
                            </h1>
                            <div className="text-base text-gray-500 mb-2">
                                {product?.type}
                            </div>
                            <div className="text-2xl font-bold text-primaryYellow mb-2">
                                {product ? formatRupiah(product.price) : "-"}
                            </div>
                            <CategoryPills
                                categories={product?.categoryNames || []}
                            />
                        </div>

                        <InfoCard title="Composition">
                            {product?.composition?.length ? (
                                <ul className="list-disc ml-5">
                                    {product.composition.map((c, i) => (
                                        <li key={i}>{c}</li>
                                    ))}
                                </ul>
                            ) : (
                                <span>-</span>
                            )}
                        </InfoCard>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InfoCard title="Packaging">
                                {product?.packaging || "-"}
                            </InfoCard>
                            <InfoCard title="Produced By">
                                {product?.productBy || "-"}
                            </InfoCard>
                        </div>

                        <CheckoutAndWarningContainer
                            product={product}
                            quantity={quantity}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
