import lucasCompany from "@/assets/homepage/bg_hero.svg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

export default function LoginPage() {
    return (
        <div className="text-black font-poppins bg-darkRed2 h-screen flex gap-5 justify-center items-center">
            <div className="w-[350px] h-[450px] relative">
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
            <div className="bg-white w-[500px] h-[450px] rounded-lg p-5 flex flex-col justify-center">
                <div className="bg-darkRed p-3 rounded-lg">
                    <h1 className="text-white font-semibold text-center text-xl">ADMIN LOGIN</h1>
                    <p className="text-white text-center">
                        Please enter your admin email to get OTP number
                    </p>
                    <div className="mt-10">
                        <Label className="text-white" htmlFor="email">Email</Label>
                        <Input className="bg-white" type="email" id="email" placeholder="Admin Email" />
                    </div>
                    <Button className="mt-4 w-full mb-4" variant={"secondary"}>
                        Send OTP Code
                    </Button>
                </div>
                <div className="bg-blue p-4 rounded-lg mt-4">
                    <p className="text-white font-light text-sm">If you want to add another account for admin, please contact Administrator or</p>
                    <Button className="mt-4 w-full bg-orange text-darkRed hover:bg-orange hover:brightness-75 transition-all duration-200" variant={"secondary"}>
                        Add New Admin Account
                    </Button>
                </div>
            </div>
        </div>
    );
}
