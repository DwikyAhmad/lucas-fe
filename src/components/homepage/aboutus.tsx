import { Button } from "@/components/ui/button";
import download from "@/assets/miscellaneous/Download.svg";
import downloadRed from "@/assets/miscellaneous/DownloadRed.svg";
import Image from "next/image";
import bagan from "@/assets/homepage/bagan.svg";

export default function Aboutus() {
    return (
        <div className="bg-white py-8 font-poppins" id="aboutus">
            <div className="bg-red-100 py-8">
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
                <div className="w-[500px] border-4 px-6 py-4 h-[300px] rounded-xl border-black">
                    <h2 className="text-center mb-2 text-4xl font-bold tracking-wide">VISI</h2>
                    <div className="flex items-center h-[170px] px-5 text-justify font-medium">
                        <p className="font-medium text-md lg:text-lg">
                            A trusted pharmaceutical company that produce health
                            care and cosmetics products in order to <span className="text-primaryRed">
                                improve
                                customers quality of life.
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-[500px] border-4 px-10 py-4 sm:h-[300px] rounded-xl border-black">
                    <h2 className="text-center mb-2 text-4xl font-bold tracking-wide">MISI</h2>
                    <ul className="list-disc ">
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
