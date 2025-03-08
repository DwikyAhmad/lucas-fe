"use client";

import HeaderCategories from "@/components/productService/headerCategoriesName";
import HeaderProduct from "@/components/productService/productCategoriesHeader";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { IoCart } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { formatRupiah } from "@/utils/utils";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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
    const shopRef = useRef(null);
    const isShopInView = useInView(shopRef, { once: true, amount: 0.2 });

    const handleCheckboxChange = (categoryName: string, isChecked: boolean) => {
        if (isChecked) {
            // Jika checkbox dicentang, ganti filter dengan kategori yang dipilih (bukan menambahkan)
            setListFilter([categoryName]);
        } else {
            // Jika checkbox tidak dicentang, hapus filter
            setListFilter([]);
        }
    };

    return (
        <motion.div 
            ref={shopRef}
            initial={{ opacity: 0 }}
            animate={isShopInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full font-poppins bg-white gap-4 mb-8"
        >
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={isShopInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <HeaderProduct
                    pageTitle="ALL PRODUCTS"
                    className="text-primaryBlueNavy flex flex-col w-full pt-4 items-center"
                    search={search}
                    onSearch={setSearch}
                />
            </motion.div>
            <div className="flex lg:flex-row flex-col items-center lg:items-start justify-start align-middle w-full px-6 mt-2 gap-8">
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={isShopInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="filter text-white bg-redBricks lg:h-full w-max rounded-md lg:rounded-xl px-4 py-4 gap-2 lg:pt-5 lg:px-10 lg:pb-20 flex lg:flex-col lg:items-start items-center align-middle justify-center shadow-md"
                >
                    <h2 className="md:text-2xl text-xl mb-5 font-semibold lg:flex hidden">
                        FILTER
                    </h2>
                    <ScrollArea className="max-lg:w-[230px] max-lg:h-[200px] h-[400px]">
                        <div className="flex flex-col gap-4">
                            {categories.map((category, index) => (
                                <div key={index} className="flex space-x-2 items-center hover:bg-white/10 p-1 rounded-md transition-colors">
                                    <Checkbox
                                        id={category.id}
                                        checked={listFilter.includes(
                                            category.name
                                        )}
                                        onCheckedChange={(isChecked) =>
                                            handleCheckboxChange(
                                                category.name,
                                                !!isChecked
                                            )
                                        }
                                        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-redBricks"
                                    />
                                    <div className="grid gap-1.5 leading-none">
                                        <label
                                            htmlFor={category.id}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                        >
                                            {category.name}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </motion.div>
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={isShopInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full flex flex-col items-center align-top justify-start border rounded-lg shadow-sm"
                >
                    {listFilter.length > 0 ? (
                        <div className="w-full h-full flex flex-col mb-5">
                            <HeaderCategories title={listFilter[0]} />
                            {productsPerCategory[listFilter[0]] ? (
                                <div className="w-full flex-wrap flex flex-row items-center align-top justify-center md:justify-start gap-6 px-4">
                                    {productsPerCategory[listFilter[0]]
                                        .filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
                                        .map((product, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ y: 50, opacity: 0 }}
                                                animate={isShopInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                                            >
                                                <Link href={`/products/${product.id}`}>
                                                    <div
                                                        className="text-black border flex items-center
                                                        flex-col justify-evenly border-black border-opacity-20 hover:scale-105 text-3xl rounded-2xl
                                                        transition-all duration-200 ease-in-out lg:py-1 py-0 pb-2 h-[380px] w-[300px] cursor-pointer
                                                        hover:shadow-lg"
                                                    >
                                                        <div
                                                            className="product-image border rounded-xl drop-shadow-2xl border-black
                                                        border-opacity-20 flex items-center justify-center align-middle
                                                        mb-2 mt-4 overflow-hidden"
                                                        >
                                                            <Image
                                                                src={
                                                                    product.image || "https://i.pinimg.com/564x/ee/62/96/ee62964178d22165482a2c1a0343cb2a.jpg"
                                                                }
                                                                className="rounded-xl border border-black hover:scale-110 transition-transform duration-300"
                                                                alt={product.name}
                                                                width={150}
                                                                height={100}
                                                            ></Image>
                                                        </div>
                                                        <div className="md:px-4 px-2 flex flex-col items-center w-full mt-auto mb-4">
                                                            <div className="md:mx-4 w-full">
                                                                <div
                                                                    className="font-semibold font-poppins lg:text-2xl text-xl
                                                                text-primaryBlueNavy truncate max-w-[280px]"
                                                                >
                                                                    {product.name}
                                                                </div>
                                                                <div className="title text-xs font-medium text-black text-opacity-30">
                                                                    {product.type}
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between md:mt-8 mt-4 md:gap-4 gap-2 w-full">
                                                                <p
                                                                    className="border border-primaryBlack md:rounded-xl px-5 md:py-1 py-1
                                                                    lg:text-xl text-lg text-nowrap font-semibold hover:bg-primaryBlack
                                                                    hover:text-white transition-transform duration-300 ease-in-out hover:scale-105
                                                                    drop-shadow-2xl md:w-full w-full items-center align-middle
                                                                    justify-center content-center flex rounded-full"
                                                                >
                                                                    {formatRupiah(
                                                                        product.price
                                                                    )}
                                                                </p>
                                                                <div className="marketplace">
                                                                    <div
                                                                        className="border border-primaryBlack rounded-xl px-2 py-1
                                                                        text-2xl font-semibold h-full items-center flex bg-primaryYellow
                                                                        text-white transition-transform duration-300 ease-in-out hover:scale-105
                                                                        md:scale-100 scale-75 drop-shadow-2xl hover:bg-darkYellow"
                                                                        style={{
                                                                            cursor: "pointer",
                                                                        }}
                                                                    >
                                                                        <IoCart />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    {productsPerCategory[listFilter[0]].filter(product => 
                                        product.name.toLowerCase().includes(search.toLowerCase())
                                    ).length === 0 && (
                                        <div className="w-full py-10">
                                            <h3 className="text-xl text-primaryBlueNavy font-medium text-center">
                                                No products match your search
                                            </h3>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <h2
                                    className="text-2xl text-primaryBlueNavy font-semibold text-center mb-5 py-10"
                                >
                                    Product not found
                                </h2>
                            )}
                        </div>
                    ) : (
                        <h2 className="text-2xl text-primaryBlueNavy font-semibold text-center mb-5 mt-5 py-10">
                            Please select a category
                        </h2>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
}
