import lucasCompany from "@/assets/homepage/bg_hero.svg";
import Image from "next/image";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="text-black font-poppins bg-darkRed2 h-screen flex gap-5 justify-center items-center">
            <div className="max-sm:hidden w-[350px] sm:h-[524px] relative">
                <p className="absolute text-white z-10 text-3xl top-5 left-5 w-[250px] font-light">
                    “ A reliable pharma company that improves people health and
                    quality of life “
                </p>
                <Image
                    src={lucasCompany}
                    alt="lucas company"
                    fill
                    style={{ objectFit: "cover", objectPosition: "left" }}
                    className="rounded-lg"
                />
            </div>
            <RegisterForm />
        </div>
  )
}