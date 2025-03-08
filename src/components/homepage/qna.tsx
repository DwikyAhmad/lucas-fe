'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Qna() {
    const qnaRef = useRef(null);
    const accordionRef = useRef(null);
    const isQnaInView = useInView(qnaRef, { once: true, amount: 0.3 });
    const isAccordionInView = useInView(accordionRef, { once: true, amount: 0.3 });

    return (
        <div className="font-poppins bg-white mt-4">
            <motion.div 
                className="bg-gray-200 text-black text-center py-6"
                ref={qnaRef}
                initial={{ opacity: 0 }}
                animate={isQnaInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2 
                    className="text-primaryBlueNavy text-center text-3xl sm:text-5xl font-semibold"
                    initial={{ y: -20, opacity: 0 }}
                    animate={isQnaInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    General <span className="text-primaryRed">FAQs</span>
                </motion.h2>
                <motion.div 
                    className="flex justify-center mt-2 sm:mt-3"
                    initial={{ scaleX: 0 }}
                    animate={isQnaInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="border-b-4 w-[180px] sm:w-[200px] border-primaryRed"></div>
                </motion.div>
            </motion.div>
            <motion.div 
                className="bg-primaryBlueNavy text-white px-6 sm:px-12 py-2 pb-7"
                ref={accordionRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isAccordionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <Accordion type="single" collapsible className="w-full">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={isAccordionInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-md">
                                Apa itu Lucas Djaja?
                            </AccordionTrigger>
                            <AccordionContent>
                            PT Lucas Djaja adalah entitas anak PT Phapros Tbk. PT Lucas Djaja merupakan perusahaan yang memiliki fasilitas Soft Gel dan Oralit, serta portofolio Obat Generic. PT Lucas Djaja merupakan salah satu perusahaan farmasi pertama di Indonesia yang mendapatkan sertifikasi Cara Pembuatan Obat yang Baik (CPOB) pada tahun 1990.
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={isAccordionInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-md">
                                Apa keunggulan produk Lucas Djaja?
                            </AccordionTrigger>
                            <AccordionContent>
                                Produk Lucas Djaja dikenal dengan kualitas terbaik dan telah mendapatkan berbagai sertifikasi internasional seperti ISO 9000, ISO 14000, sertifikasi Halal MUI, dan diakui oleh BPOM serta Kementerian Kesehatan RI. Kami menggunakan teknologi modern dan standar ketat dalam setiap proses produksi untuk memastikan keamanan dan efektivitas produk.
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={isAccordionInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-md">
                                Bagaimana Lucas Djaja berkontribusi pada industri farmasi Indonesia?
                            </AccordionTrigger>
                            <AccordionContent>
                                Lucas Djaja telah berkontribusi signifikan dalam industri farmasi Indonesia dengan menyediakan obat-obatan berkualitas tinggi dan terjangkau. Kami juga berkomitmen pada inovasi berkelanjutan, penelitian dan pengembangan produk baru, serta mendukung program kesehatan nasional untuk meningkatkan kualitas hidup masyarakat Indonesia.
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                </Accordion>
            </motion.div>
        </div>
    );
}
