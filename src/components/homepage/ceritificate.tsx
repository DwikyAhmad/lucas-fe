'use client'

import iso14000 from "@/assets/homepage/ISO 14000.svg";
import kan from "@/assets/homepage/KAN.svg";
import iso9000 from "@/assets/homepage/ISO 9000.svg";
import bpom from "@/assets/homepage/BPOM.svg";
import kemenkes from "@/assets/homepage/Logo Kementerian Kesehatan (Kemenkes) Republik Indonesia (SVG-2160p) - FileVector69.svg";
import mui from "@/assets/homepage/Halal MUI Logo (SVG-1080p) - FileVector69.svg";
import iaf from "@/assets/homepage/IAF.svg";
import Image from "next/image";
import lucas from "@/assets/homepage/Lucasdjaja-6.svg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Ceritificate() {
    const certificateRef = useRef(null);
    const lucasRef = useRef(null);
    const isCertificateInView = useInView(certificateRef, { once: true, amount: 0.3 });
    const isLucasInView = useInView(lucasRef, { once: true, amount: 0.3 });

    return (
        <div>
            <motion.div 
                className="bg-darkRed py-4 font-poppins"
                ref={certificateRef}
                initial={{ opacity: 0 }}
                animate={isCertificateInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.p 
                    className="text-center text-lg font-semibold"
                    initial={{ y: -20, opacity: 0 }}
                    animate={isCertificateInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Certificates Of Achievement
                </motion.p>
                <motion.div 
                    className="flex justify-center mt-3"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={isCertificateInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Carousel className="w-[210px] sm:w-[500px] lg:w-[900px]">
                        <CarouselContent className="items-center">
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center items-center">
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <Image src={iso14000} alt="ISO 14000" />
                                </motion.div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center items-center">
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <Image src={kan} alt="kan" />
                                </motion.div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center items-center">
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <Image src={iso9000} alt="iso9000" />
                                </motion.div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center items-center">
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <Image src={bpom} alt="bpom" />
                                </motion.div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center items-center">
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <Image src={kemenkes} alt="kemenkes" />
                                </motion.div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center items-center">
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <Image src={mui} alt="mui" />
                                </motion.div>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center items-center">
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <Image src={iaf} alt="iaf" />
                                </motion.div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </motion.div>
            </motion.div>
            <motion.div 
                className="bg-white flex justify-center pt-9"
                ref={lucasRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isLucasInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={isLucasInView ? { scale: 1 } : { scale: 0.9 }}
                    transition={{ 
                        duration: 1,
                        delay: 0.4,
                        type: "spring",
                        stiffness: 100
                    }}
                >
                    <Image src={lucas} alt="lucas" className="w-[280px] sm:w-[600px] lg:w-[800px]" />
                </motion.div>
            </motion.div>
        </div>
    );
}
