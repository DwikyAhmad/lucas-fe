"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCart } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { formatRupiah } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

interface Category {
    id: string;
    name: string;
}

interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    type: string;
    composition: string[];
    image: string;
    categoryName: string[];
}

interface CompProps {
    categories: Category[];
    products: Product[];
}

export default function LucaShop({ categories, products }: CompProps) {
    const param = useSearchParams();
    const filter = param.get("filter") || "";
    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        filter ? [filter] : []
    );
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [priceSort, setPriceSort] = useState<string>("");
    const [minPrice, setMinPrice] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<string>("");

    // Count products per category
    const categoryCounts: Record<string, number> = {};
    categories.forEach((cat) => {
        categoryCounts[cat.name] = products.filter((p) =>
            p.categoryName.includes(cat.name)
        ).length;
    });

    const handleCategoryChange = (categoryName: string, checked: boolean) => {
        setSelectedCategories((prev) => {
            if (checked) {
                return [...prev, categoryName];
            } else {
                return prev.filter((cat) => cat !== categoryName);
            }
        });
    };

    const clearAllFilters = () => {
        setSelectedCategories([]);
    };

    // Filter products based on search, category, and price range
    let filteredProducts = products.filter((product) => {
        // Filter by search term
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());
        // Filter by category if any category is selected
        const matchesCategory =
            selectedCategories.length === 0 ||
            product.categoryName.some((category) =>
                selectedCategories.includes(category)
            );
        // Filter by price range
        const price = product.price;
        const min = minPrice ? parseInt(minPrice) : null;
        const max = maxPrice ? parseInt(maxPrice) : null;
        const matchesMin = min === null || price >= min;
        const matchesMax = max === null || price <= max;
        return matchesSearch && matchesCategory && matchesMin && matchesMax;
    });

    // Sort by price if selected
    if (priceSort === "low") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (priceSort === "high") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    }

    // Best seller: first 3 products (unfiltered)
    const bestSellers = products.slice(0, 3);

    // Debug: Log the data to console
    console.log("Categories:", categories);
    console.log("Products:", products);
    console.log("Filtered Products:", filteredProducts);

    // Add error handling for missing data
    if (!categories || !products) {
        return (
            <div className="container mx-auto px-4 py-8 font-poppins">
                <div className="bg-red-500 text-white p-4 rounded">
                    <h1>Error: Data not loaded</h1>
                    <p>Categories: {JSON.stringify(categories)}</p>
                    <p>Products: {JSON.stringify(products)}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 font-poppins bg-white min-h-screen">
            {/* Header and Search */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-primaryBlueNavy text-center mb-4">
                    Lucas Pharmacy
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    High-quality medicine products for your health needs
                </p>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-primaryBlueNavy">
                    {/* Search Bar */}
                    <div className="relative w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryBlueNavy"
                        />
                        <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    </div>
                    {/* Filter Button */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <button className="px-5 py-2 rounded-full bg-primaryBlueNavy text-white font-medium shadow hover:bg-blue-900 transition-colors">
                                Filter by Category
                            </button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-full bg-white text-primaryBlueNavy"
                        >
                            <SheetHeader>
                                <SheetTitle className="text-primaryBlueNavy">
                                    Filter Categories
                                </SheetTitle>
                            </SheetHeader>
                            <div className="mt-6 overflow-y-auto h-[calc(100vh-6rem)]">
                                {selectedCategories.length > 0 && (
                                    <button
                                        onClick={clearAllFilters}
                                        className="mb-3 px-3 py-2 text-sm bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors w-full"
                                    >
                                        Clear
                                    </button>
                                )}
                                <div className="flex flex-col gap-y-2">
                                    {categories.map((category) => (
                                        <label
                                            key={category.id}
                                            className="flex items-center gap-2 cursor-pointer select-none text-primaryBlueNavy"
                                        >
                                            <Checkbox
                                                checked={selectedCategories.includes(
                                                    category.name
                                                )}
                                                onCheckedChange={(checked) =>
                                                    handleCategoryChange(
                                                        category.name,
                                                        !!checked
                                                    )
                                                }
                                                className="border-gray-300 data-[state=checked]:bg-primaryBlueNavy"
                                            />
                                            <span className="text-base">
                                                {category.name}
                                            </span>
                                            <span className="text-gray-400 text-sm">
                                                ({categoryCounts[category.name]}
                                                )
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                    {/* Price Filter and Range */}
                    <div className="flex flex-col gap-2 w-full md:w-auto items-start justify-end mt-4 md:mt-0">
                        <Select value={priceSort} onValueChange={setPriceSort}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Sort by Price" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="low">Price: Low to High</SelectItem>
                                <SelectItem value="high">Price: High to Low</SelectItem>
                            </SelectContent>
                        </Select>
                        <div>
                            <input
                                type="number"
                                min={0}
                                value={minPrice}
                                onChange={e => setMinPrice(e.target.value)}
                                placeholder="Min Price"
                                className="w-full sm:w-24 px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primaryBlueNavy text-sm"
                            />
                            <span className="mx-1 text-gray-400">-</span>
                            <input
                                type="number"
                                min={0}
                                value={maxPrice}
                                onChange={e => setMaxPrice(e.target.value)}
                                placeholder="Max Price"
                                className="w-full sm:w-24 px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primaryBlueNavy text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Best Seller Section */}
            <div className="mb-10">
                <h2 className="text-xl font-bold text-primaryBlueNavy mb-4">Best Sellers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bestSellers.map((product, idx) => (
                        <div key={idx}>
                            <Link href={`/products/${product.id}`}>
                                <div className="bg-yellow-50 border border-primaryYellow rounded-xl shadow hover:shadow-lg transition-all duration-200 overflow-hidden h-full flex flex-col">
                                    <div className="p-4 flex justify-center bg-gray-50">
                                        <Image
                                            src={product.image || "https://i.pinimg.com/564x/ee/62/96/ee62964178d22165482a2c1a0343cb2a.jpg"}
                                            alt={product.name}
                                            width={150}
                                            height={150}
                                            className="object-contain h-[150px] w-[150px] transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col flex-grow">
                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primaryYellow text-primaryBlueNavy w-fit mb-2">
                                            Best Seller
                                        </span>
                                        <h3 className="font-semibold text-lg mb-1 text-primaryBlueNavy line-clamp-2">
                                            {product.name}
                                        </h3>
                                        <span className={`text-xs ${product.stock > 0 ? 'text-green-600' : 'text-red-600'} mb-2`}>
                                            {product.stock > 0 ? `In Stock: ${product.stock}` : 'Out of Stock'}
                                        </span>
                                        <span className="font-bold text-lg text-primaryBlueNavy">
                                            {formatRupiah(product.price)}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="w-full bg-gray-100 rounded-xl p-4">
                {/* Category Title */}
                <h2 className="text-2xl font-semibold mb-6 text-primaryBlueNavy">
                    {selectedCategories.length > 0
                        ? selectedCategories.length === 1
                            ? selectedCategories[0]
                            : `${selectedCategories.length} Categories`
                        : "All Products"}
                    <span className="text-sm font-normal text-gray-500 ml-2">
                        ({filteredProducts.length} items)
                    </span>
                </h2>
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product, idx) => (
                            <div key={idx}>
                                <Link href={`/products/${product.id}`}>
                                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden h-full flex flex-col">
                                        {/* Product Image */}
                                        <div className="p-4 flex justify-center bg-gray-50">
                                            <Image
                                                src={
                                                    product.image ||
                                                    "https://i.pinimg.com/564x/ee/62/96/ee62964178d22165482a2c1a0343cb2a.jpg"
                                                }
                                                alt={product.name}
                                                width={150}
                                                height={150}
                                                className="object-contain h-[150px] w-[150px] transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col flex-grow">
                                            {/* Product Type Badge */}
                                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-primaryBlueNavy w-fit mb-2">
                                                {product.type}
                                            </span>
                                            {/* Product Name */}
                                            <h3 className="font-semibold text-lg mb-1 text-primaryBlueNavy line-clamp-2">
                                                {product.name}
                                            </h3>
                                            {/* Stock Status */}
                                            <span
                                                className={`text-xs ${
                                                    product.stock > 0
                                                        ? "text-green-600"
                                                        : "text-red-600"
                                                } mb-2`}
                                            >
                                                {product.stock > 0
                                                    ? `In Stock: ${product.stock}`
                                                    : "Out of Stock"}
                                            </span>
                                            <div className="mt-auto pt-4 flex justify-between items-center">
                                                <span className="font-bold text-lg text-primaryBlueNavy">
                                                    {formatRupiah(
                                                        product.price
                                                    )}
                                                </span>
                                                <button
                                                    className="p-2 rounded-full bg-primaryYellow text-white hover:bg-darkYellow transition-colors"
                                                    aria-label="Add to cart"
                                                >
                                                    <IoCart size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-xl p-8 text-center shadow-[0_0_15px_0_rgba(0,0,0,0.1)]">
                        <h3 className="text-xl text-primaryBlueNavy font-medium">
                            No products match your search
                        </h3>
                        <p className="text-gray-500 mt-2">
                            Try adjusting your search or filter criteria
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
