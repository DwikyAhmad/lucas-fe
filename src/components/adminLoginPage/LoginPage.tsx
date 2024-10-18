import lucasCompany from "@/assets/homepage/bg_hero.svg"
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="text-black font-poppins bg-darkRed2 h-screen flex justify-evenly items-center">
            <div className="w-[350px] h-[400px] relative">
                <p className="absolute text-white z-10 text-3xl top-5 left-5 w-[250px] font-light">“ A reliable pharma company that improves people health and quality of life “</p>
                <Image src={lucasCompany} alt="lucas company" fill
                    style={{ objectFit: "cover", objectPosition: 'left' }} className="rounded-lg" />
            </div>
            <div className="bg-white w-[500px] h-[400px] rounded-lg">

            </div>
        </div>
    );
}
