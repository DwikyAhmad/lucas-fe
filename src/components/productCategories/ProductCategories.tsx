"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import HeaderProduct from "@/components/ui/productService/productCategoriesHeader";
import ProductCard from "@/components/ui/productService/categorieCard";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

interface Category {
    id: string;
    name: string;
    description: string;
}
type CategoryCount = {
    [key: string]: number;
};
interface Props {
    categories: Category[];
    categoryCount: CategoryCount;
}

export default function ProductCategories({
    categories,
    categoryCount,
}: Props) {
    const [search, setSearch] = useState("");
    const handleSearch = (searchTerm: string) => {
        setSearch(searchTerm);
    };
    const router = useRouter();
    const toDetailPage = (filter: string) => {
        router.push(`/products?filter=${filter}`);
    };

    return (
        <>
            <Navbar />
            <HeaderProduct
                pageTitle={"PRODUCTS CATEGORIES"}
                search={search}
                onSearch={handleSearch}
            />
            <div className="bg-primaryBlueNavy h-full">
                {categories.map((cat) => (
                    <div key={cat.id} onClick={() => toDetailPage(cat.name)}>
                        <ProductCard
                            src="https://i.pinimg.com/enabled_lo/564x/36/a1/ce/36a1ceede11c2234f40147d17c4d031c.jpg"
                            alt="Deskripsi gambar"
                            width={500}
                            height={500}
                            title={cat.name} // Dynamic name for each cat
                            description="Sejak tahun 2003, Lucas group adalah satu-satunya perusahaan swasta  swasta yang ditunjuk untuk mensuplai kebutuhan obat nasional, selain  selain tiga BUMN. Sampai dengan saat ini Lucas Group sudah  bergabung ke dalam Kimia Farma Group dan masih aktif mengi- kuti  tender e catalog untuk memasok kebutuhan obat obatan generic ke  seluruh wilayah Indonesia."
                            amount={categoryCount[cat.name] ?? 0}
                        />
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}
