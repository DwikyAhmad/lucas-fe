import Image from "next/image";
import phapros from "@/assets/homepage/Phapros.svg";
import bgHero from "@/assets/homepage/bg_hero.svg";
import icon from "./icon.svg"
import { Input } from "@/components/ui/input"
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
                    <h1 className="font-poppins font-bold text-center text-6xl">
                        SELAMAT DATANG
                    </h1>
                    <p className="text-center font-josefinSans font-light text-xl tracking-wide">
                        Penuhi kebutuhan kesehatanmu disini
                    </p>
                </div>
                <div className="flex mt-10 justify-evenly">
                    <div>
                        <div className="bg-[#999999] flex gap-4 py-3 px-5 rounded-xl font-semibold w-max">
                            <div className="flex items-center">
                                <div className="bg-[#E42228] p-2">
                                    <Image
                                        src={icon}
                                        alt="LucasDjaja Logo"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-5xl">LUCAS DJAJA</p>
                                <Image
                                    className="w-[150px]"
                                    src={phapros}
                                    alt="Phapros Logo"
                                />
                            </div>
                        </div>
                        <p className="mt-3 w-[440px] text-justify font-poppins font-light">
                            Lucas Group Pharmaceutical memiliki tujuan untuk
                            menyediakan produk farmasi dan healthcare yang
                            terjangkau namun tetap berkualitas. Semua produk
                            Lucas Group dirancang dengan standar GMP yang
                            berlaku serta bersertifikat halal
                        </p>
                        <Button
                            className=" bg-primaryBlack mt-4 w-fit px-5 py-6 rounded-xl font-istokWeb font-bold
                        text-lg"
                        >
                            Check Our Product Here
                            <Image src={arrow} alt="Arrow" className="w-[10px] ml-3" />
                            <Image src={arrow} alt="Arrow" className="w-[10px]" />
                        </Button>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white/30 backdrop-blur-md w-[500px] px-5 py-5 rounded-xl border-2 border-white/60">
                            <p className="text-center text-2xl font-bold">Sign In</p>
                            <div className="flex flex-col">
                                <label htmlFor="username" className="mt-4 font-istokWeb font-bold text-xs">Username</label>
                                <Input className="bg-white text-black" type="text" name="username" id="username" placeholder="lucas.jaya"/>
                                <label htmlFor="password" className="mt-4 font-istokWeb font-bold text-xs">Password</label>
                                <Input className="bg-white text-black" type="password" name="password" id="password" placeholder="************"/>
                                <div className="flex justify-between text-sm mt-1">
                                    <a href="#">Forgot Password?</a>
                                    <p>Don&apos;t have account yet? <a href="#" className="underline">Sign Up Here</a></p>
                                </div>
                                <Button className="mt-8">LOGIN</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
