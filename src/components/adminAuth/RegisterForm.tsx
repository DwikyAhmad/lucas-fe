"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import register from "./register";
import { Toaster } from "react-hot-toast";

export default function RegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {
        const response = await register({
            email,
            username,
            password,
            confirmPassword,
        });
        if (response) {
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
    };

    return (
        <div className="bg-white w-[500px] rounded-md p-1 sm:p-2 flex flex-col justify-center">
            <Toaster />
            <div className="bg-darkRed p-3 rounded-lg py-8">
                <h1 className="text-white font-semibold text-center text-xl">
                    ADMIN REGISTER
                </h1>
                <p className="text-white text-center text-sm">
                    Create account for new admin
                </p>
                <div className="mt-10">
                    <Label className="text-white" htmlFor="username">
                        Username
                    </Label>
                    <Input
                        className="bg-white"
                        type="email"
                        id="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mt-2">
                    <Label className="text-white" htmlFor="email">
                        Email
                    </Label>
                    <Input
                        className="bg-white"
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-2">
                    <Label className="text-white" htmlFor="password">
                        Password
                    </Label>
                    <Input
                        className="bg-white"
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mt-2">
                    <Label className="text-white" htmlFor="confirmpassword">
                        Confirm password
                    </Label>
                    <Input
                        className="bg-white"
                        type="password"
                        id="confirmpassword"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <Button
                    className="mt-8 w-full mb-2"
                    variant={"secondary"}
                    onClick={handleRegister}
                >
                    Register
                </Button>
                <p className="text-white text-center font-light text-xs">
                    Have an account?{" "}
                    <Link href={"/admin"}>
                        <span className="underline font-semibold">
                            Login here
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    );
}
