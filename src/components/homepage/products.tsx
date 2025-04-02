'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import amino from "@/assets/homepage/AMINO.svg";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import axios from "axios";
import API_URL from "@/utils/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Products() {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${API_URL}/category`);
                setCategories(response.data.categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        
        fetchCategories();
    }, []);
    
    return (
        <div className="py-8 font-poppins flex flex-col items-center bg-white">
            <motion.div 
                className="w-full max-w-7xl mx-auto px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1 
                    className="text-center text-5xl sm:text-6xl font-bold mb-4"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="text-primaryRed">Our</span>{" "}
                    <span className="text-primaryBlueNavy">Products</span>
                </motion.h1>
                <motion.div 
                    className="flex justify-center mb-8"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="border-b-4 w-[180px] border-primaryRed"></div>
                </motion.div>

                <Carousel className="w-full max-w-5xl mx-auto">
                    <CarouselContent className=" px-2">
                        {categories.map((category: any) => (
                            <CarouselItem key={category.id}>
                                <motion.div 
                                    className="bg-[#F8F9FF] rounded-2xl overflow-hidden shadow-lg"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="flex flex-col md:flex-row items-center p-8 gap-8">
                                        <div className="w-full md:w-1/2">
                                            <Image 
                                                src={amino} 
                                                alt={category.name}
                                                className="w-full object-cover rounded-lg"
                                                priority
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 space-y-6">
                                            <h2 className="text-3xl font-bold text-primaryBlueNavy uppercase">
                                                {category.name}
                                            </h2>
                                            <p className="text-gray-700 text-sm">
                                                {category.description || `Sejak tahun 2003, Lucas group adalah satu-satunya perusahaan swasta yang ditunjuk untuk mensuplai kebutuhan obat nasional, selain tiga BUMN. Sampai dengan saat ini Lucas Group sudah bergabung ke dalam Kimia Farma Group dan masih aktif mengikuti tender e-catalog untuk memasok kebutuhan obat obatan generic ke seluruh wilayah Indonesia`}
                                            </p>
                                            <Link href={`/category/${category.id}`}>
                                                <Button
                                                    className="bg-primaryBlueNavy text-white px-8 py-2 rounded-lg text-md hover:bg-primaryBlueNavy/90 mt-4 transition-colors"
                                                >
                                                    See Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex items-center justify-center mt-8 gap-4">
                        <CarouselPrevious className="static bg-primaryBlueNavy hover:bg-primaryBlueNavy/90 text-white hover:text-red-400 transform scale-150" />
                        <CarouselNext className="static bg-primaryBlueNavy hover:bg-primaryBlueNavy/90 text-white hover:text-red-400 transform scale-150" />
                    </div>
                </Carousel>

                <motion.div 
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link href="/category">
                        <Button className="bg-white border-2 border-primaryBlueNavy text-primaryBlueNavy px-12 py-6 text-xl rounded-xl hover:bg-primaryBlueNavy hover:text-white transition-colors">
                            More Products
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
