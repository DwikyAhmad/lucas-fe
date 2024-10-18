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

export default function Clients() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const scrollContent = scrollContainer.innerHTML;
        scrollContainer.innerHTML += scrollContent;

        let scrollAmount = 0;
        const scrollSpeed = 0.5; // Adjust the scroll speed as needed

        const scroll = () => {
            scrollAmount += scrollSpeed;
            if (scrollAmount >= scrollContainer.scrollHeight / 2) {
                scrollAmount = 0;
            }
            scrollContainer.scrollTop = scrollAmount;
            requestAnimationFrame(scroll);
        };

        scroll();
    }, []);

    return (
        <div className="bg-white text-black font-poppins px-2 py-4 flex justify-center">
            <div className="border-2 border-black/70 rounded-lg px-2 py-2 flex justify-evenly w-[70%] items-center">
                <div className="text-5xl text-wrap w-[300px] font-bold text-primaryRed">
                    <span className="text-primaryBlueNavy">Our</span> Best Client
                </div>
                <div className="flex justify-center flex-wrap gap-6 w-[600px] h-[300px] overflow-hidden bg-gray-200 px-4 py-2 rounded-lg"
                ref={scrollContainerRef}>
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
                </div>
            </div>
        </div>
    );
}
