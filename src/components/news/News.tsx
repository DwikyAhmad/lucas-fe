"use client";
import React, { useRef } from "react";
import HeaderNews from "./HeaderNews";
import CardNews from "./CardNews";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface News {
    title: string;
    writer: string;
    fileUrl: string;
    imageUrl: string;
    teaser: string;
    createdAt: Date;
}

interface newsProps {
    listOfNews: News[];
}

function News({ listOfNews }: newsProps) {
    const newsRef = useRef(null);
    const isNewsInView = useInView(newsRef, { once: true, amount: 0.3 });

    return (
        <>
            <motion.div 
                ref={newsRef}
                className="bg-primaryBlueNavy w-full p-4 min-h-screen"
            >
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={isNewsInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <HeaderNews pageTitle={"NEWS"} />
                </motion.div>
                <div className="w-full flex gap-x-2 gap-y-4 flex-wrap items-center justify-center align-middle">
                    {listOfNews.map(
                        (
                            newsItem: News,
                            index: React.Key | null | undefined
                        ) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                animate={isNewsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + (Number(index) * 0.1) }}
                            >
                                <CardNews newsItem={newsItem} />
                            </motion.div>
                        )
                    )}
                </div>
            </motion.div>
        </>
    );
}

export default News;
