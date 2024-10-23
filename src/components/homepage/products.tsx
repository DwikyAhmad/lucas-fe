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

export default function Products() {
    return (
        <div className="bg-white py-4 font-poppins">
            <div className="bg-primaryBlueNavy/20 py-8 flex flex-col items-center">
                <h1 className="text-primaryRed text-center text-5xl font-semibold ">
                    OUR <span className="text-primaryBlueNavy">PRODUCTS</span>
                </h1>
                <div className="flex justify-center mt-3">
                    <div className="border-b-4 w-[200px] border-primaryRed"></div>
                </div>
                <div
                    className="mt-10 w-[900px] h-[350px] bg-gradient-to-b from-[#1E274B] to-[#741010]
                rounded-xl flex items-center justify-center py-2 px-4"
                >
                    <Carousel className="w-[700px]">
                        <CarouselContent>
                            <CarouselItem className="flex justify-center">
                                <div className="flex justify-evenly w-full">
                                    <Image
                                        src={amino}
                                        alt="amino"
                                        className="w-[250px]"
                                    />
                                    <div className="w-[400px] flex flex-col gap-2">
                                        <p className="font-semibold text-lg text-red-500">
                                            PRODUK GENERIK
                                        </p>
                                        <p className="text-sm text-justify">
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
                                        <Button
                                            variant={"secondary"}
                                            className="self-end"
                                        >
                                            More products{" "}
                                            <ChevronRight className="h-4 w-4 ml-1" />
                                        </Button>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="flex justify-center">
                                <div className="flex justify-evenly w-full">
                                    <Image
                                        src={amino}
                                        alt="amino"
                                        className="w-[250px]"
                                    />
                                    <div className="w-[400px] flex flex-col gap-2">
                                        <p className="font-semibold text-lg text-red-500">
                                            PRODUK GENERIK
                                        </p>
                                        <p className="text-sm text-justify">
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
                                        <Button
                                            variant={"secondary"}
                                            className="self-end"
                                        >
                                            More products{" "}
                                            <ChevronRight className="h-4 w-4 ml-1" />
                                        </Button>
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
