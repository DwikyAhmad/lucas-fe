import Image from "next/image";
import amino from "@/assets/homepage/AMINO.svg";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
// import { useState } from "react";
import axios from "axios";
import API_URL from "@/utils/utils";
import { Card, CardContent } from "@mui/material";

export default async function Products() {

    // const [category, setCategory] = useState("");
    const categories = (await axios.get(`${API_URL}/category`)).data.categories;
    console.log(categories);
    
    
    return (
        <div className=" py-4 font-poppins flex flex-col items-center p-8 ">
            <div className="w-full py-8 flex flex-col items-center  ">
                <h1 className="text-primaryRed text-center text-3xl sm:text-5xl font-semibold ">
                    OUR <span className="text-primaryBlueNavy">PRODUCTS</span>
                   
                </h1>
                <div className="flex justify-center mt-2 sm:mt-3">
                    <div className="border-b-4 w-[200px] border-primaryRed"></div>
                </div>
                <div
                    className="mt-6 sm:mt-10  
                rounded-xl flex items-center justify-center py-8 px-4 w-5/6 "
                >
                    <Carousel className=" w-full max-sm flex items-center align-middle justify-center h-full "  >
                        <CarouselContent className=" w-full h-max flex  p-4 ">
                            {categories.map((category: any) => (

                                    <CarouselItem key={category.id} className=" lg:basis-1/3 w-full h-full">
                                    <div className="p-1 w-full h-max border">
                                    <Card className="w-full h-full flex justify-start items-start">
                                        <CardContent className="flex flex-col w-full h-max items-center justify-center p-6 ">
                                                <Image src={amino} alt={""}   className="flex w-[250px] " ></Image>
                                                <span className="text-3xl font-semibold text-center uppercase text-primaryBlueNavy line-clamp-1">{category.name}</span>
                                                <Link href={"/category"} className="self-end sm:flex items-center flex w-full">
                                                    <Button
                                                        variant={"secondary"}
                                                        className="self-end  sm:flex w-full  border-white bg-primaryRed shadow-xl text-white text-lg text-center flex items-center hover:bg-primaryRed-20">
                                                        See Details
                                                        <ChevronRight className="h-4 w-4 ml-1" />
                                                    </Button>
                                                </Link>
                                        </CardContent>
                                    </Card>
                                    </div>
                                    </CarouselItem> 
                                ))}
                          
                            {/* <CarouselItem className="flex justify-center">
                                <div className="flex justify-evenly w-full flex-wrap-reverse sm:flex-wrap gap-6">
                                    <Button
                                        variant={"secondary"}
                                        className="self-end text-xs flex sm:hidden w-full"
                                    >
                                        More products{" "}
                                        <ChevronRight className="h-4 w-4 ml-1" />
                                    </Button>
                                    <Image
                                        src={amino}
                                        alt="amino"
                                        className="flex w-[250px]"
                                    />
                                    <div className="w-[160px] sm:w-[400px] flex flex-col gap-2">
                                        <p className="font-semibold text-md sm:text-lg text-red-500">
                                            PRODUK GENERIK
                                        </p>
                                        <p className="hidden sm:inline text-xs sm:text-sm text-justify">
                                            Sejak tahun 2003, Lucas group adalah
                                            satu-satunya perusahaan swasta
                                            swasta yang ditunjuk untuk mensuplai
                                            kebutuhan obat nasional, selain
                                            selain tiga BUMN. Sampai dengan saat
                                            ini Lucas Group sudah bergabung ke
                                            dalam Kimia Farma Group dan masih
                                            aktif mengikuti tender e catalog
                                            untuk memasok kebutuhan obat obatan
                                            generic ke seluruh wilayah
                                            Indonesia.
                                        </p>

                                        <Link href={"/category"} className="self-end sm:flex hidden">
                                            <Button
                                                variant={"secondary"}
                                                className="self-end  sm:flex hidden"
                                            >
                                                More products{" "}
                                                <ChevronRight className="h-4 w-4 ml-1" />
                                            </Button>
                                        </Link>
                                       
                                    </div>
                                </div>
                            </CarouselItem> */}
                        </CarouselContent>
                        <CarouselPrevious className="bg-primaryBlueNavy scale-150" />
                        <CarouselNext className="bg-primaryBlueNavy scale-150"/>
                    </Carousel>

                </div>
            </div>
            
        </div>
    );
}
