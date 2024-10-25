"use client";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginForm() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const changeValue = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFunction: (value: string) => void
    ) => {
        setFunction(e.target.value);
    };

    const login = async () => {
        try {
            const response = await axios.post(`/api/auth/login/user`, {
                email: email,
                password: password,
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-white/30 backdrop-blur-md w-[500px] px-5 py-5 rounded-xl border-2 border-white/60">
            <p className="text-center text-2xl font-bold">Sign In</p>
            <div className="flex flex-col">
                <label
                    htmlFor="email"
                    className="mt-4 font-istokWeb font-bold text-xs"
                >
                    Email
                </label>
                <Input
                    className="bg-white text-black"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="lucas.jaya@gmail.com"
                    value={email}
                    onChange={(e) => changeValue(e, setEmail)}
                />
                <label
                    htmlFor="password"
                    className="mt-4 font-istokWeb font-bold text-xs"
                >
                    Password
                </label>
                <Input
                    className="bg-white text-black"
                    type="password"
                    value={password}
                    onChange={(e) => changeValue(e, setPassword)}
                    name="password"
                    id="password"
                    placeholder="************"
                />
                <div className="flex justify-between text-sm mt-1">
                    <a href="#">Forgot Password?</a>
                    <p>
                        Don&apos;t have account yet?{" "}
                        <a href="#" className="underline">
                            Sign Up Here
                        </a>
                    </p>
                </div>
                <Button className="mt-8" onClick={login}>LOGIN</Button>
            </div>
        </div>
    );
}
