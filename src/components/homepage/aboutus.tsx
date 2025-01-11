import { Button } from "@/components/ui/button";
import download from "@/assets/miscellaneous/Download.svg";
import downloadRed from "@/assets/miscellaneous/DownloadRed.svg";
import Image from "next/image";
import bagan from "@/assets/homepage/bagan.svg";
import visi from '@/assets/homepage/visi.svg';
import misi from '@/assets/homepage/MISI.svg';

export default function Aboutus() {
    return (
        <div className="bg-white py-8 font-poppins" id="aboutus">
            <div className="py-8">
                <h1 className="text-primaryBlueNavy text-center text-3xl sm:text-5xl font-semibold ">
                    ABOUT <span className="text-primaryRed">US</span>
                </h1>
                <div className="flex justify-center mt-1 sm:mt-3">
                    <div className="border-b-4 w-[100px] sm:w-[200px] border-primaryRed"></div>
                </div>
                <div className="flex justify-evenly px-4 mt-5 sm:mt-10 flex-wrap ">
                    <div className="sm:w-[300px] lg:w-[500px]">
                        <p className="text-justify text-primaryBlueNavy w-full text-md sm:text-lg">
                            a pharmaceutical company that was founded in{" "}
                            <span className="font-semibold">1968</span> and became
                            one of one of the first pharmaceutical companies in
                            Indonesia to get a{" "}
                            <span className="text-primaryRed font-semibold">
                                certification of Good Manufacturing Practices (GMP)
                                in 1990.
                            </span>
                        </p>
                        <div className="flex sm:hidden justify-center">
                            <Image
                                src={bagan}
                                alt="bagan"
                                className="flex sm:hidden mt-4 w-[350px] lg:w-[400px] border rounded-xl border-black"
                            />
                        </div>
                        <Button
                            className="mt-4 w-full flex justify-between bg-primaryRed font-semibold hover:bg-darkRed
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
                    </div>
                    <div className="">
                        <Image
                            src={bagan}
                            alt="bagan"
                            className="hidden sm:flex w-[350px] lg:w-[400px] border rounded-xl border-black"
                        />
                    </div>
                </div>
            </div>
            <div className="flex mt-10 justify-evenly text-primaryBlueNavy flex-wrap gap-y-6 px-2">
                <div className="sm:w-[75%] flex flex-col md:flex-row items-center border-4 h-[300px] rounded-2xl 
                border-black overflow-hidden">
                    <div className="bg-primaryRed px-14 w-full md:w-[176px] md:h-full justify-center flex relative">
                        <h2 className="text-center py-2 text-4xl font-bold tracking-wide text-white
                        md:mt-8">VISI</h2>
                        <Image
                            src={visi}
                            alt="visi"
                            className="absolute right-0 bottom-0 hidden md:flex"
                        />
                    </div>
                    <div className="flex items-center justify-center w-full h-[170px] text-justify font-medium">
                        <p className="font-medium text-md lg:text-2xl px-8 lg:px-16">
                            A trusted pharmaceutical company that produce health
                            care and cosmetics products in order to <span className="text-primaryRed">
                                improve
                                customers quality of life.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="sm:w-[75%] flex flex-col md:flex-row items-center md:gap-10
                 border-4 overflow-hidden md:h-[380px] rounded-2xl border-black">
                    <div className="bg-primaryRed h-full w-full md:w-fit px-12 relative">
                        <h2 className="text-center py-2 text-4xl font-bold tracking-wide text-white
                        md:mt-8">MISI</h2>
                        <Image
                            src={misi}
                            alt="misi"
                            className="absolute right-0 bottom-0 hidden md:flex"
                        />
                    </div>
                    <ul className="list-disc px-10 py-4 space-y-4 text-md lg:text-2xl ">
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
                    </ul>
                </div>
            </div>
        </div>
    );
}
