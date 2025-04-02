"use client";

import Image from "next/image";
import phapros from "@/assets/homepage/Phapros.svg";
import bgHero from "@/assets/homepage/bg_hero.svg";
import icon from "@/app/icon.svg";
import { Button } from "@/components/ui/button";
import arrow from "@/assets/miscellaneous/Arrow.svg";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <>
            <div className="pt-6 pb-12 px-4 relative font-poppins overflow-x-hidden">
                <Image
                    className="-z-10 object-fill"
                    src={bgHero}
                    alt="Background Hero"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10"></div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-poppins font-bold text-center text-3xl sm:text-6xl">
                        SELAMAT DATANG
                    </h1>
                    <p className="text-center font-light text-md sm:text-lg tracking-wide">
                        Penuhi kebutuhan kesehatanmu disini
                    </p>
                </motion.div>
                <div className="flex mt-10 justify-evenly flex-wrap gap-5">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className=" flex gap-4 py-3 px-5 rounded-xl font-semibold w-max">
                            <div className="flex items-center">
                                <motion.div 
                                    className="bg-[#E42228] p-1 sm:p-2"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Image
                                        src={icon}
                                        alt="LucasDjaja Logo"
                                        className="max-sm:w-[28px] "
                                    />
                                </motion.div>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-[28px] sm:text-5xl">
                                    LUCAS DJAJA
                                </p>
                                <Image
                                    className="w-[90px] sm:w-[150px]"
                                    src={phapros}
                                    alt="Phapros Logo"
                                />
                            </div>
                        </div>
                        <p className="mt-3 w-[280px] sm:w-[440px] max-sm:text-sm text-justify font-poppins font-light">
                            Lucas Group Pharmaceutical memiliki tujuan untuk
                            menyediakan produk farmasi dan healthcare yang
                            terjangkau namun tetap berkualitas. Semua produk
                            Lucas Group dirancang dengan standar GMP yang
                            berlaku serta bersertifikat halal
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                className="bg-primaryBlack mt-4 w-[280px] sm:w-[440px] px-5 py-6 rounded-xl font-istokWeb font-bold
                                text-lg"
                            >
                                Check Our Product Here
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="flex"
                                >
                                    <Image
                                        src={arrow}
                                        alt="Arrow"
                                        className="w-[10px] ml-3"
                                    />
                                    <Image
                                        src={arrow}
                                        alt="Arrow"
                                        className="w-[10px]"
                                    />
                                </motion.div>
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="justify-center lg:flex"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <iframe
                            className="min-w-[300px] min-h-[300px] aspect-square lg:aspect-video rounded-lg border-primaryBlack border-4"
                            src="https://www.youtube.com/embed/7gK2LiP1f3g?si=7ZCumZ87NKbOn_6m"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
