'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import amino from "@/assets/homepage/AMINO.svg";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
// import { useState } from "react";
import axios from "axios";
import API_URL from "@/utils/utils";
import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Products() {

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${API_URL}/category`);
                setCategories(response.data.categories);
                console.log(response.data.categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        
        fetchCategories();
    }, []);
    
    return (
        <div className=" py-4 font-poppins flex flex-col items-center p-8 ">
            <motion.div 
                className="w-full py-8 flex flex-col items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1 
                    className="text-primaryRed text-center text-3xl sm:text-5xl font-semibold"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    OUR <span className="text-primaryBlueNavy">PRODUCTS</span>
                </motion.h1>
                <motion.div 
                    className="flex justify-center mt-2 sm:mt-3"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="border-b-4 w-[200px] border-primaryRed"></div>
                </motion.div>
                <motion.div
                    className="mt-6 sm:mt-10 rounded-xl flex items-center justify-center py-8 px-4 w-5/6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <Carousel className=" w-full max-sm flex items-center align-middle justify-center h-full "  >
                        <CarouselContent className=" w-full h-max flex  p-4 ">
                            {categories.map((category: any, index: number) => (
                                <CarouselItem key={category.id} className=" lg:basis-1/3 w-full h-full">
                                    <motion.div 
                                        className="p-1 w-full h-max border"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Card className="w-full h-full flex justify-start items-start">
                                            <CardContent className="flex flex-col w-full h-max items-center justify-center p-6 ">
                                                <motion.div
                                                    initial={{ y: -10, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                                >
                                                    <Image src={amino} alt={""} className="flex w-[250px] " />
                                                </motion.div>
                                                <motion.span 
                                                    className="text-3xl font-semibold text-center uppercase text-primaryBlueNavy line-clamp-1"
                                                    initial={{ y: 10, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                                >
                                                    {category.name}
                                                </motion.span>
                                                <motion.div
                                                    className="self-end sm:flex items-center flex w-full"
                                                    initial={{ y: 10, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                                                >
                                                    <Link href={"/category"} className="w-full">
                                                        <Button
                                                            variant={"secondary"}
                                                            className="self-end sm:flex w-full border-white bg-primaryRed shadow-xl text-white text-lg text-center flex items-center hover:bg-primaryRed-20"
                                                        >
                                                            See Details
                                                            <ChevronRight className="h-4 w-4 ml-1" />
                                                        </Button>
                                                    </Link>
                                                </motion.div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </CarouselItem> 
                            ))}
                        </CarouselContent>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="absolute left-0 transform -translate-x-1/2"
                        >
                            <CarouselPrevious className="bg-primaryBlueNavy scale-150" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="absolute right-0 transform translate-x-1/2"
                        >
                            <CarouselNext className="bg-primaryBlueNavy scale-150"/>
                        </motion.div>
                    </Carousel>
                </motion.div>
            </motion.div>
        </div>
    );
}
