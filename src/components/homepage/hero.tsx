import Image from "next/image";
import phapros from "@/assets/homepage/Phapros.svg";
import bgHero from "@/assets/homepage/bg_hero.svg";
import icon from "@/app/icon.svg"
import LoginForm from "./loginForm";
import { Button } from "@/components/ui/button"
import arrow from "@/assets/miscellaneous/Arrow.svg"


export default function Hero() {    
    return (
        <>
            <div className="pt-6 pb-12 px-4 relative font-poppins">
                <Image
                    className="-z-10 object-fill"
                    src={bgHero}
                    alt="Background Hero"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10"></div>
                <div>
                    <h1 className="font-poppins font-bold text-center text-3xl sm:text-6xl">
                        SELAMAT DATANG
                    </h1>
                    <p className="text-center font-josefinSans font-light text-md sm:text-xl tracking-wide">
                        Penuhi kebutuhan kesehatanmu disini
                    </p>
                </div>
                <div className="flex mt-10 justify-evenly">
                    <div>
                        <div className="bg-[#999999] flex gap-4 py-3 px-5 rounded-xl font-semibold w-max">
                            <div className="flex items-center">
                                <div className="bg-[#E42228] p-1 sm:p-2">
                                    <Image
                                        src={icon}
                                        alt="LucasDjaja Logo"
                                        className="max-sm:w-[28px] "
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-[28px] sm:text-5xl">LUCAS DJAJA</p>
                                <Image
                                    className="w-[90px] sm:w-[150px]"
                                    src={phapros}
                                    alt="Phapros Logo"
                                />
                            </div>
                        </div>
                        <p className="mt-3 w-[280px] sm:w-[440px] max-sm:text-sm text-justify font-poppins font-light">
                            Lucas Group Pharmaceutical memiliki tujuan untuk
                            menyediakan produk farmasi dan healthcare yang
                            terjangkau namun tetap berkualitas. Semua produk
                            Lucas Group dirancang dengan standar GMP yang
                            berlaku serta bersertifikat halal
                        </p>
                        <Button
                            className=" bg-primaryBlack mt-4 w-[280px] sm:w-[440px] px-5 py-6 rounded-xl font-istokWeb font-bold
                        text-lg"
                        >
                            Check Our Product Here
                            <Image src={arrow} alt="Arrow" className="w-[10px] ml-3" />
                            <Image src={arrow} alt="Arrow" className="w-[10px]" />
                        </Button>
                    </div>
                    <div className="hidden justify-center lg:flex">
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </>
    );
}
