"use client";

import HeaderCategories from "@/components/productService/headerCategoriesName";
import HeaderProduct from "@/components/productService/productCategoriesHeader";
import React, { useState } from "react";
import Image from "next/image";
import { IoCart } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { formatRupiah } from "@/utils/utils";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";

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
    const [listFilter, setListFilter] = useState<string[]>([
        filter ? filter : "",
    ]);
    const [search, setSearch] = useState("");

    const handleCheckboxChange = (categoryName: string, isChecked: boolean) => {
        if (isChecked) {
            setListFilter([categoryName, ...listFilter]);
        } else {
            setListFilter(listFilter.filter((name) => name !== categoryName));
        }
    };

    return (
        <div className="h-full w-full font-poppins bg-white gap-4 mb-8">
            <HeaderProduct
                pageTitle="ALL PRODUCTS"
                className="text-primaryBlueNavy flex flex-col w-full pt-4 items-center"
                search={search}
                onSearch={(value) => setSearch(value)}
            />
            <div className="flex lg:flex-row flex-col items-center lg:items-start justify-start align-middle w-full px-6 mt-2 gap-8">
                <div className="filter text-white bg-redBricks lg:h-full w-max rounded-md lg:rounded-xl px-4 py-4 gap-2 lg:pt-5 lg:px-10 lg:pb-20 flex lg:flex-col lg:items-start items-center align-middle justify-center">
                    <h2 className="md:text-2xl text-xl mb-5 font-semibold lg:flex hidden">
                        FILTER
                    </h2>
                    <ScrollArea className="max-lg:w-[230px] max-lg:h-[200px] h-[400px]">
                        <div className="flex flex-col gap-4">
                            {categories.map((category, index) => (
                                <div key={index} className="flex space-x-2">
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
                                    />
                                    <div className="grid gap-1.5 leading-none">
                                        <label
                                            htmlFor={category.id}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {category.name}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
                <div className="w-full flex flex-col items-center align-top justify-start border rounded-lg">
                    {listFilter.length > 0 ? (
                        listFilter.map((filter, index) => (
                            <div
                                key={index}
                                className="w-full h-full flex flex-col mb-5"
                            >
                                <HeaderCategories title={filter} />
                                {productsPerCategory[filter] ? (
                                    <div className="w-full flex-wrap flex flex-row items-center align-top justify-start gap-6 px-4">
                                        {productsPerCategory[filter].map(
                                            (product, index) => (
                                                <Link key={index} href={`/products/${product.id}`}>
                                                    <div
                                                        className="text-black border flex items-center
                                                        flex-col justify-evenly border-black border-opacity-20 hover:scale-105 text-3xl rounded-2xl
                                                        transition-all duration-200 ease-in-out lg:py-1 py-0 pb-2 h-[380px] w-[300px] cursor-pointer"
                                                    >
                                                        <div
                                                            className="product-image border rounded-xl drop-shadow-2xl border-black
                                                        border-opacity-20 flex items-center justify-center align-middle
                                                        mb-2 mt-4"
                                                        >
                                                            <Image
                                                                src={
                                                                    "https://i.pinimg.com/564x/ee/62/96/ee62964178d22165482a2c1a0343cb2a.jpg"
                                                                }
                                                                className=" rounded-xl border border-black "
                                                                alt={""}
                                                                width={150}
                                                                height={100}
                                                            ></Image>
                                                        </div>
                                                        <div className="md:px-4 px-2 flex flex-col items-center w-full mt-auto mb-4">
                                                            <div className="md:mx-4 w-full">
                                                                <div
                                                                    className="font-semibold font-poppins lg:text-2xl text-xl
                                                                text-primaryBlueNavy"
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
                                                                        md:scale-100 scale-75drop-shadow-2xl hover:bg-darkYellow "
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
                                            )
                                        )}
                                    </div>
                                ) : (
                                    <h2
                                        key={index}
                                        className="text-2xl text-primaryBlueNavy font-semibold text-center mb-5"
                                    >
                                        Product not found
                                    </h2>
                                )}
                            </div>
                        ))
                    ) : (
                        <h2 className="text-2xl text-primaryBlueNavy font-semibold text-center mb-5 mt-5">
                            Please select a category
                        </h2>
                    )}
                </div>
            </div>
        </div>
    );
}
