"use client";

import bg_hero from "@/assets/homepage/bg_hero.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import LoginForm from "./LoginForm";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Login() {
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirect');
    return (
        <div className="font-poppins text-black min-h-screen relative">
            <Image
                src={bg_hero}
                fill
                style={{ position: "absolute", objectFit: "cover", zIndex: -1 }}
                alt="bg_hero"
            />
            <div className="flex">
                <div className="mx-auto hidden sm:flex flex-col justify-center gap-24 text-white items-center text-center">
                    <div>
                        <p>WELCOME TO</p>
                        <Link href={'/'}>
                            <p className="text-4xl font-semibold">LUCAS DJAJA</p>
                        </Link>
                        <p className="w-[300px] text-sm font-light">
                            Providing high-quality pharmaceutical solutions with
                            GMP standards and halal certification for better
                            health.
                        </p>
                    </div>
                    <div>
                        <p className="font-light text-sm">
                            Don&apos;t have an account?
                        </p>
                        <Link href={`/register${redirectUrl ? `?redirect=${encodeURIComponent(redirectUrl)}` : ''}`}>
                            <Button
                                className="text-md font-semibold mt-2"
                                variant={"secondary"}
                            >
                                Register
                            </Button>
                        </Link>
                    </div>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}
