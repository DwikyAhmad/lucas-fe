'use client';

import Image from "next/image";
import molex from "@/assets/bestClientsLogo/molex.svg"
import aartijaya from "@/assets/bestClientsLogo/aartijaya.svg"
import globalhealth from "@/assets/bestClientsLogo/globalhealth.svg"
import SAP from "@/assets/bestClientsLogo/SAP.svg"
import mersi from "@/assets/bestClientsLogo/mersi.svg"
import erlimpex from "@/assets/bestClientsLogo/erlimpex.svg"
import galenium from "@/assets/bestClientsLogo/galenium.svg"
import mbj from "@/assets/bestClientsLogo/mbj.svg"
import perkebunannusantara from "@/assets/bestClientsLogo/perkebunannusantara.svg"
import merhati from "@/assets/bestClientsLogo/merhati.svg"
import sil from "@/assets/bestClientsLogo/sil.svg"
import eta from "@/assets/bestClientsLogo/eta.svg"
import indofarma from "@/assets/bestClientsLogo/indofarma.svg"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Clients() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const clientsRef = useRef(null);
    const isInView = useInView(clientsRef, { once: true, amount: 0.3 });

    const clients = [
        { src: molex, alt: "molex" },
        { src: aartijaya, alt: "aartijaya" },
        { src: globalhealth, alt: "globalhealth" },
        { src: SAP, alt: "SAP" },
        { src: mersi, alt: "mersi" },
        { src: erlimpex, alt: "erlimpex" },
        { src: galenium, alt: "galenium" },
        { src: mbj, alt: "mbj" },
        { src: perkebunannusantara, alt: "perkebunannusantara" },
        { src: merhati, alt: "merhati" },
        { src: sil, alt: "sil" },
        { src: eta, alt: "eta" },
        { src: indofarma, alt: "indofarma" }
    ];

    return (
        <motion.div 
            className="bg-white text-black font-poppins px-2 py-4 flex justify-center mt-8"
            ref={clientsRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className="border-2 border-black/70 rounded-lg flex-wrap px-4 py-6 flex w-[90%] lg:w-[90%] xl:w-[70%] justify-evenly items-center gap-8"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.div 
                    className="text-2xl sm:text-3xl text-center lg:text-5xl font-bold text-primaryRed"
                    initial={{ x: -30, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <span className="text-primaryBlueNavy">Our</span> Best Client
                </motion.div>
                <div className="relative w-full max-w-[500px] h-[300px] overflow-hidden bg-gray-200 rounded-lg">
                    <motion.div 
                        className="flex flex-col absolute w-full"
                        ref={scrollContainerRef}
                        animate={{ 
                            y: [0, -1500],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {/* First set of clients */}
                        {clients.map((client) => (
                            <div 
                                key={`first-${client.alt}`}
                                className="flex justify-center items-center py-4 px-4"
                            >
                                <Image 
                                    src={client.src} 
                                    width={150}
                                    alt={client.alt}
                                    className="hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        ))}
                        {/* Duplicate set of clients for seamless loop */}
                        {clients.map((client) => (
                            <div 
                                key={`second-${client.alt}`}
                                className="flex justify-center items-center py-4 px-4"
                            >
                                <Image 
                                    src={client.src} 
                                    width={150}
                                    alt={client.alt}
                                    className="hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
