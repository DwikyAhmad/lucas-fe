import bg_hero from "@/assets/homepage/bg_hero.svg";
import Image from "next/image";
import RegisterForm from "./RegisterForm";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Register() {
    return (
        <div className="font-poppins text-black min-h-screen relative">
            <Image
                src={bg_hero}
                fill
                style={{ position: "absolute", objectFit: "cover", zIndex: -1 }}
                alt="bg_hero"
            />
            <div className="flex">
                <RegisterForm />
                <div className="mx-auto hidden sm:flex flex-col justify-center gap-24 text-white items-center text-center">
                    <div>
                        <p>WELCOME TO</p>
                        <p className="text-4xl font-semibold">LUCAS DJAJA</p>
                        <p className="w-[300px] text-sm font-light">
                            Providing high-quality pharmaceutical solutions with GMP
                            standards and halal certification for better health.
                        </p>
                    </div>
                    <div>
                        <p className="font-light text-sm">Already have an account?</p>
                        <Link href={'/login'}><Button className="text-md font-semibold mt-2" variant={"secondary"}>Sign in</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}