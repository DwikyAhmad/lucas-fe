"use client";

import { Button } from "@/components/ui/button";
import download from "@/assets/miscellaneous/Download.svg";
import downloadRed from "@/assets/miscellaneous/DownloadRed.svg";
import Image from "next/image";
import bagan from "@/assets/homepage/bagan.svg";
import visi from "@/assets/homepage/visi.svg";
import misi from "@/assets/homepage/MISI.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Aboutus() {
    const aboutRef = useRef(null);
    const visiRef = useRef(null);
    const misiRef = useRef(null);

    const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
    const isVisiInView = useInView(visiRef, { once: true, amount: 0.3 });
    const isMisiInView = useInView(misiRef, { once: true, amount: 0.3 });

    return (
        <div className="bg-white py-8 font-poppins px-4 overflow-x-hidden" id="aboutus">
            {/* About Us Section */}
            <motion.div
                className="py-8"
                ref={aboutRef}
                initial={{ opacity: 0 }}
                animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-primaryBlueNavy text-center text-3xl sm:text-5xl font-semibold"
                    initial={{ y: -20, opacity: 0 }}
                    animate={
                        isAboutInView
                            ? { y: 0, opacity: 1 }
                            : { y: -20, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    ABOUT <span className="text-primaryRed">US</span>
                </motion.h1>
                <motion.div
                    className="flex justify-center mt-1 sm:mt-3"
                    initial={{ scaleX: 0 }}
                    animate={isAboutInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="border-b-4 w-[100px] sm:w-[200px] border-primaryRed"></div>
                </motion.div>
                <div className="flex justify-evenly px-4 mt-5 sm:mt-10 flex-wrap ">
                    <motion.div
                        className="sm:w-[300px] lg:w-[500px]"
                        initial={{ x: -50, opacity: 0 }}
                        animate={
                            isAboutInView
                                ? { x: 0, opacity: 1 }
                                : { x: -50, opacity: 0 }
                        }
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <p className="text-justify text-primaryBlueNavy w-full text-md sm:text-lg">
                            a pharmaceutical company that was founded in{" "}
                            <span className="font-semibold">1968</span> and
                            became one of one of the first pharmaceutical
                            companies in Indonesia to get a{" "}
                            <span className="text-primaryRed font-semibold">
                                certification of Good Manufacturing Practices
                                (GMP) in 1990.
                            </span>
                        </p>
                    </motion.div>
                    <motion.div className="w-full md:max-w-[350px] md:ml-4">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={
                                isAboutInView
                                    ? { y: 0, opacity: 1 }
                                    : { y: 20, opacity: 0 }
                            }
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <Button
                                className="mt-4 md:mt-0 w-full flex justify-between bg-primaryRed font-semibold hover:bg-darkRed
                            group"
                            >
                                Company Profile
                                <div className="flex gap-2">
                                    <p className="text-black text-xs group-hover:text-white transition font-semibold">
                                        Download pdf
                                    </p>
                                    <Image
                                        src={download}
                                        alt="download"
                                        className="w-4"
                                    />
                                </div>
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={
                                isAboutInView
                                    ? { y: 0, opacity: 1 }
                                    : { y: 20, opacity: 0 }
                            }
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <Button
                                className="mt-2 lg:mt-3 w-full flex justify-between bg-white border-2 border-primaryRed font-semibold
                            text-primaryRed hover:bg-darkRed hover:text-white group"
                            >
                                Product Catalog
                                <div className="flex gap-2">
                                    <p className="text-black group-hover:text-white transition text-xs font-semibold">
                                        Download pdf
                                    </p>
                                    <Image
                                        src={downloadRed}
                                        alt="download"
                                        className="w-4"
                                    />
                                </div>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

            {/* Visi Section */}
            </motion.div>
            <div className="flex mt-10 justify-evenly text-primaryBlueNavy flex-wrap gap-y-6 px-2">
                <motion.div
                    className="lg:w-[75%] flex flex-col md:flex-row items-center h-[250px] rounded-3xl 
                    bg-gray-100 overflow-hidden"
                    ref={visiRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                        isVisiInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 50 }
                    }
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="bg-primaryRed px-14 w-full md:w-[176px] md:h-full justify-center flex relative"
                        initial={{ x: -50, opacity: 0 }}
                        animate={
                            isVisiInView
                                ? { x: 0, opacity: 1 }
                                : { x: -50, opacity: 0 }
                        }
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2
                            className="text-center py-2 text-4xl font-bold tracking-wide text-white
                        md:mt-8"
                        >
                            VISI
                        </h2>
                        <Image
                            src={visi}
                            alt="visi"
                            className="absolute right-0 bottom-0 hidden md:flex"
                        />
                    </motion.div>
                    <motion.div
                        className="flex items-center justify-center w-full h-[170px] text-justify font-medium"
                        initial={{ x: 50, opacity: 0 }}
                        animate={
                            isVisiInView
                                ? { x: 0, opacity: 1 }
                                : { x: 50, opacity: 0 }
                        }
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <p className="font-medium text-md lg:text-lg px-8 lg:px-16">
                            A trusted pharmaceutical company that produce health
                            care and cosmetics products in order to{" "}
                            <span className="text-primaryRed">
                                improve customers quality of life.
                            </span>
                        </p>
                    </motion.div>
                </motion.div>

                {/* Misi Section */}
                <motion.div
                    className="lg:w-[75%] flex flex-col md:flex-row items-center md:gap-10
                    overflow-hidden md:min-h-[250px] rounded-3xl bg-gray-100"
                    ref={misiRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                        isMisiInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 50 }
                    }
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="bg-primaryRed h-full w-full md:w-fit px-12 relative"
                        initial={{ x: -50, opacity: 0 }}
                        animate={
                            isMisiInView
                                ? { x: 0, opacity: 1 }
                                : { x: -50, opacity: 0 }
                        }
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2
                            className="text-center py-2 text-4xl font-bold tracking-wide text-white
                        md:mt-8"
                        >
                            MISI
                        </h2>
                        <Image
                            src={misi}
                            alt="misi"
                            className="absolute right-0 bottom-0 hidden md:flex"
                        />
                    </motion.div>
                    <motion.ul
                        className="list-disc marker:text-primaryRed px-10 py-8 space-y-4 text-md lg:text-lg"
                        initial={{ x: 50, opacity: 0 }}
                        animate={
                            isMisiInView
                                ? { x: 0, opacity: 1 }
                                : { x: 50, opacity: 0 }
                        }
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <li>
                            Providing affordable pharmaceutical and health care
                            products through continuous improvement
                        </li>
                        <li>
                            Managing business process based on operational
                            excellence, cost leadership, and quality compliance
                            supported by competent employees
                        </li>
                        <li>
                            Become a strategic partner for other pharmaceutical
                            companies in developing and manufacturing healthcare
                            and cosmetic products.
                        </li>
                    </motion.ul>
                </motion.div>
                <motion.div
                    className="w-full lg:w-[75%] flex justify-center relative h-[500px]"
                    initial={{ x: 50, opacity: 0 }}
                    animate={
                        isMisiInView
                            ? { x: 0, opacity: 1 }
                            : { x: 50, opacity: 0 }
                    }
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Image
                        src={bagan}
                        alt="bagan"
                        fill
                        className="border rounded-3xl border-black object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
}
