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
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Clients() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const clientsRef = useRef(null);
    const isInView = useInView(clientsRef, { once: true, amount: 0.3 });

    useEffect(() => {
        if (!isInView) return;
        
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const scrollContent = scrollContainer.innerHTML;
        scrollContainer.innerHTML += scrollContent;

        let scrollAmount = 0;
        const scrollSpeed = 0.5; // Adjust the scroll speed as needed
        let animationId: number;

        const scroll = () => {
            scrollAmount += scrollSpeed;
            if (scrollAmount >= scrollContainer.scrollHeight / 2) {
                scrollAmount = 0;
            }
            scrollContainer.scrollTop = scrollAmount;
            animationId = requestAnimationFrame(scroll);
        };

        scroll();
        
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [isInView]);

    return (
        <motion.div 
            className="bg-white text-black font-poppins px-2 py-4 flex justify-center"
            ref={clientsRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className="border-2 border-black/70 rounded-lg px-4 py-2 md:tex flex flex-wrap justify-evenly w-[90%] lg:w-[90%] xl:w-[70%] items-center"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.div 
                    className="text-2xl sm:text-3xl text-center lg:text-start mb-2 lg:mb-0 lg:text-5xl text-wrap w-[250px] font-bold text-primaryRed"
                    initial={{ x: -30, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <span className="text-primaryBlueNavy">Our</span> Best Client
                </motion.div>
                <motion.div 
                    className="flex justify-center flex-wrap gap-6 w-[600px] h-[300px] overflow-hidden bg-gray-200 px-4 py-2 rounded-lg"
                    ref={scrollContainerRef}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Image src={molex} height={50} alt="molex" />
                    <Image src={aartijaya} height={50} alt="aartijaya" />
                    <Image src={globalhealth} height={50} alt="globalhealth" />
                    <Image src={SAP} height={50} alt="SAP" />
                    <Image src={mersi} height={50} alt="mersi" />
                    <Image src={erlimpex} height={50} alt="erlimpex" />
                    <Image src={galenium} height={50} alt="galenium" />
                    <Image src={mbj} height={50} alt="mbj" />
                    <Image src={perkebunannusantara} height={50} alt="perkebunannusantara" />
                    <Image src={merhati} height={50} alt="merhati" />
                    <Image src={sil} height={50} alt="sil" />
                    <Image src={eta} height={50} alt="eta" />
                    <Image src={indofarma} height={50} alt="indofarma" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
