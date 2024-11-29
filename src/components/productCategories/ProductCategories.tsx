"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import ProductCard from "@/components/productService/categorieCard";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

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
    const filteredCategories = categories.filter((cat) =>
        cat.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-primaryBlueNavy font-poppins">
                <div
                    className="bg-primaryBlueNavy w-full py-3 flex flex-col justify-center align-middle"
                >
                    <div className="header flex md:mb-6 mb-2">
                        <div className="flex flex-col w-full align-middle items-center justify-center g-4 ">
                            <div
                                className="flex flex-col items-center justify-center align-middle title w-max"
                            >
                                <h2 className="md:text-4xl font-black sm:text-2xl text-xl mt-4">
                                    PRODUCT CATEGORIES
                                </h2>
                                <div className=" xl:w-[50%] w-full mb-6  h-1 mt-4 bg-primaryRed">
                                    <br />
                                </div>
                            </div>
                            <div className="searchbar md:w-96 w-full flex gap-2 px-5">
                                <Input
                                    type="input"
                                    placeholder="Search here... "
                                    className="text-primaryBlueNavy bg-white font-poppins"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <Button
                                    className="h-full rounded-xl hover:brightness-75 shadow-lg sm:w-min sm:p-2"
                                >
                                    <IoSearch className="mx-1" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-primaryBlueNavy h-full">
                    {filteredCategories.length > 0 ? filteredCategories.map((cat) => (
                        <Link key={cat.id} href={`/products?filter=${cat.name}`}>
                            <div >
                                <ProductCard
                                    src="https://i.pinimg.com/enabled_lo/564x/36/a1/ce/36a1ceede11c2234f40147d17c4d031c.jpg"
                                    alt="Deskripsi gambar"
                                    width={500}
                                    height={500}
                                    title={cat.name}
                                    description="Sejak tahun 2003, Lucas group adalah satu-satunya perusahaan swasta  swasta yang ditunjuk untuk mensuplai kebutuhan obat nasional, selain  selain tiga BUMN. Sampai dengan saat ini Lucas Group sudah  bergabung ke dalam Kimia Farma Group dan masih aktif mengi- kuti  tender e catalog untuk memasok kebutuhan obat obatan generic ke  seluruh wilayah Indonesia."
                                    amount={categoryCount[cat.name] ?? 0}
                                />
                            </div>
                        </Link>
                    )) : (
                        <div className="flex justify-center items-center bg-black/15 py-2">
                            <h1 className="text-white">No Categories Found</h1>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
