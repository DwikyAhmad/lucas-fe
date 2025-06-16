"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { IoCart } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { formatRupiah } from "@/utils/utils";
import { useSearchParams } from "next/navigation";

interface Category {
    id: string;
    name: string;
    description: string;
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

interface ProductPerCategory {
    [key: string]: Product[];
}

interface CompProps {
    categories: Category[];
    productsPerCategory: ProductPerCategory;
}

export default function LucaShop({
    categories,
    productsPerCategory,
}: CompProps) {
    const param = useSearchParams();
    const filter = param.get("filter") || "";
    const [listFilter, setListFilter] = useState<string[]>(
        filter ? [filter] : []
    );
    const [search, setSearch] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const shopRef = useRef(null);
    const isShopInView = useInView(shopRef, { once: true, amount: 0.2 });

    const handleCheckboxChange = (categoryName: string, isChecked: boolean) => {
        if (isChecked) {
            setListFilter([categoryName]);
        } else {
            setListFilter([]);
        }
    };

    // Flatten all products for display when no filter is selected
    const allProducts = Object.values(productsPerCategory).flat();
    
    // Filter products based on search and category
    const filteredProducts = listFilter.length > 0
        ? (productsPerCategory[listFilter[0]] || []).filter(product => 
            product.name.toLowerCase().includes(search.toLowerCase()))
        : allProducts.filter(product => 
            product.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <motion.div 
            ref={shopRef}
            initial={{ opacity: 0 }}
            animate={isShopInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8 font-poppins"
        >
            {/* Header and Search */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={isShopInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
            >
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
                    
                    {/* Mobile Filter Button */}
                    <button 
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="flex md:hidden items-center gap-2 bg-primaryBlueNavy text-white px-4 py-2 rounded-full"
                    >
                        <IoFilter />
                        <span>Filter</span>
                    </button>
                </div>
            </motion.div>
            
            <div className="flex flex-col md:flex-row gap-6">
                {/* Category Filter */}
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={isShopInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`md:w-64 bg-white rounded-xl shadow-md p-4 md:block ${isFilterOpen ? 'block' : 'hidden md:block'} sticky top-4 self-start`}
                >
                    <h2 className="text-xl font-semibold mb-4 text-primaryBlueNavy border-b pb-2">
                        Categories
                    </h2>
                    <ScrollArea className="h-[400px] pr-4 text-primaryBlueNavy">
                        <div className="flex flex-col gap-2">
                            <div className="flex space-x-2 items-center hover:bg-gray-100 p-2 rounded transition-colors">
                                <Checkbox
                                    id="all"
                                    checked={listFilter.length === 0}
                                    onCheckedChange={(isChecked) => {
                                        if (isChecked) setListFilter([]);
                                    }}
                                    className="border-gray-300 data-[state=checked]:bg-primaryBlueNavy"
                                />
                                <label
                                    htmlFor="all"
                                    className="text-sm font-medium cursor-pointer"
                                >
                                    All Products
                                </label>
                            </div>
                            
                            {categories.map((category, index) => (
                                <div key={index} className="flex space-x-2 items-center hover:bg-gray-100 p-2 rounded transition-colors">
                                    <Checkbox
                                        id={category.id}
                                        checked={listFilter.includes(category.name)}
                                        onCheckedChange={(isChecked) =>
                                            handleCheckboxChange(category.name, !!isChecked)
                                        }
                                        className="border-gray-300 data-[state=checked]:bg-primaryBlueNavy"
                                    />
                                    <div className="grid gap-1">
                                        <label
                                            htmlFor={category.id}
                                            className="text-sm font-medium cursor-pointer"
                                        >
                                            {category.name}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </motion.div>
                
                {/* Product Grid */}
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={isShopInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex-1"
                >
                    {/* Category Title */}
                    <h2 className="text-2xl font-semibold mb-6 text-primaryBlueNavy">
                        {listFilter.length > 0 ? listFilter[0] : "All Products"}
                        <span className="text-sm font-normal text-gray-500 ml-2">
                            ({filteredProducts.length} items)
                        </span>
                    </h2>
                    
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={isShopInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + (idx * 0.05) }}
                                >
                                    <Link href={`/products/${product.id}`}>
                                        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden h-full flex flex-col">
                                            {/* Product Image */}
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
                                                {/* Product Type Badge */}
                                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-primaryBlueNavy w-fit mb-2">
                                                    {product.type}
                                                </span>
                                                
                                                {/* Product Name */}
                                                <h3 className="font-semibold text-lg mb-1 text-primaryBlueNavy line-clamp-2">
                                                    {product.name}
                                                </h3>
                                                
                                                {/* Stock Status */}
                                                <span className={`text-xs ${product.stock > 0 ? 'text-green-600' : 'text-red-600'} mb-2`}>
                                                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                                </span>
                                                
                                                <div className="mt-auto pt-4 flex justify-between items-center">
                                                    <span className="font-bold text-lg">
                                                        {formatRupiah(product.price)}
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
                                </motion.div>
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
                </motion.div>
            </div>
        </motion.div>
    );
}
