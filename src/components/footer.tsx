import Image from "next/image";
import icon from "@/app/icon.svg";
import instagram from "@/assets/iconMedsoc/instagram.svg";
import X from "@/assets/iconMedsoc/X.svg";
import whatsapp from "@/assets/iconMedsoc/whatsapp.svg";
import call from "@/assets/iconMedsoc/call.svg";
import indonesia from "@/assets/languageIcon/indonesia.svg";
import english from "@/assets/languageIcon/english.svg";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <>
            <div className="font-poppins text-white bg-primaryRed flex py-4 justify-evenly gap-8 lg:justify-between px-4 sm:px-12 flex-wrap">
                <div className="flex flex-col lg:items-start">
                    <div className="bg-primaryBlueNavy flex gap-4 py-3 px-5 rounded-xl font-semibold w-max">
                        <div className="flex items-center">
                            <div className="bg-[#E42228] p-2">
                                <Image src={icon} alt="LucasDjaja Logo"
                                className="max-sm:w-[30px]"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-xl sm:text-5xl text-white">LUCAS DJAJA</p>
                            <div className="w-[180px] sm:w-[300px] text-xs text-white font-normal text-center">
                                <p>
                                    “A reliable pharma company that improves
                                    people health and quality of life“
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 sm:gap-10">
                        <div>
                            <h3>Contact Us</h3>
                            <div className="flex gap-2">
                                <Image src={instagram} alt="Instagram" />
                                <Image src={X} alt="X" />
                                <Image src={whatsapp} alt="Whatsapp" />
                                <Image src={call} alt="call" />
                            </div>
                        </div>
                        <div className="w-[250px] sm:w-[300px]">
                            <p className="font-bold">PT LUCAS DJAJA</p>
                            <p className="font-light text-sm">
                                Jl. Ciwastra RT.07 / RW.06, Kel.Margasari,
                                Kec.Buah Batu, Bandung, West Java, Indonesia
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 sm:mt-4 flex flex-wrap gap-2 sm:gap-10">
                        <div className="flex gap-4 items-center">
                            <p>Language</p>
                            <div className="flex gap-1">
                                <Image src={indonesia} alt="Indonesia" />
                                <Image src={english} alt="English" />
                            </div>
                        </div>
                        <div className="w-[250px] sm:w-[300px]">
                            <p className="font-bold">PT MARIN LIZA FARMASI</p>
                            <p className="font-light text-sm">
                                Jl. Terusan Kiaracondong No.43, Kec.Buah Batu,
                                Bandung, West Java, Indonesia
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-black rounded-lg p-4 flex flex-col">
                    <div>
                        <h3 className="font-medium">FAQ</h3>
                        <Textarea className="mt-2" placeholder="Type your message here." />
                        <Button className="text-white mt-2 w-full">Send</Button>
                    </div>
                    <div className="mt-5 lg:mt-auto">
                        <p className="">Customer Center</p>
                        <div className="flex gap-2 text-white flex-wrap">
                            <p className="bg-blue px-2 py-1 rounded-xl">+62 22 7562974</p>
                            <p className="bg-darkRed px-2 py-1 rounded-xl">marketing@lucas.co.id</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue font-poppins text-center font-extralight">
                <p>© 2024 - Kimia Farma. All Right Reserved.</p>
            </div>
        </>
    );
}
