import iso14000 from "@/assets/homepage/ISO 14000.svg";
import kan from "@/assets/homepage/KAN.svg";
import iso9000 from "@/assets/homepage/ISO 9000.svg";
import bpom from "@/assets/homepage/BPOM.svg";
import kemenkes from "@/assets/homepage/Logo Kementerian Kesehatan (Kemenkes) Republik Indonesia (SVG-2160p) - FileVector69.svg";
import mui from "@/assets/homepage/Halal MUI Logo (SVG-1080p) - FileVector69.svg";
import iaf from "@/assets/homepage/IAF.svg";
import Image from "next/image";
import lucas from "@/assets/homepage/Lucasdjaja-6.svg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function Ceritificate() {
    return (
        <div>
            <div className="bg-darkRed py-4 font-poppins">
                <p className="text-center text-lg font-semibold">
                    Certificates Of Achievement
                </p>
                <div className="flex justify-center mt-3">
                    <Carousel className="w-[210px] sm:w-[500px] lg:w-[900px]">
                        <CarouselContent>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center">
                                <Image src={iso14000} alt="ISO 14000" />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center">
                                <Image src={kan} alt="kan" />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center">
                                <Image src={iso9000} alt="iso9000" />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center">
                                <Image src={bpom} alt="bpom" />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center">
                                <Image src={kemenkes} alt="kemenkes" />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center">
                                <Image src={mui} alt="mui" />
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 sm:basis-1/5 flex justify-center">
                                <Image src={iaf} alt="iaf" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
            <div className="bg-white flex justify-center pt-9">
                <Image src={lucas} alt="lucas" className="w-[280px] sm:w-[600px] lg:w-[800px]" />
            </div>
        </div>
    );
}
