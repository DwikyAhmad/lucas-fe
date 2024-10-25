'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginSubmit = () => {
        axios.post("/api/auth/login/admin", {
            email,
            password
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="bg-white w-[500px] rounded-lg p-3 sm:p-5 flex flex-col justify-center">
            <div className="bg-darkRed p-3 rounded-lg">
                <h1 className="text-white font-semibold text-center text-xl">
                    ADMIN LOGIN
                </h1>
                <p className="text-white text-center text-sm">
                    Please enter your admin email and password
                </p>
                <div className="mt-10">
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
                <Button className="mt-8 w-full mb-4" variant={"secondary"} onClick={loginSubmit}>
                    Login
                </Button>
            </div>
            <div className="bg-blue p-4 rounded-lg mt-4">
                <p className="text-white font-light text-sm">
                    If you want to add another account for admin, please contact
                    Administrator or
                </p>
                <Link href={'/admin/register'}>
                    <Button
                        className="mt-4 w-full bg-orange text-darkRed hover:bg-orange hover:brightness-75 transition-all duration-200"
                        variant={"secondary"}
                    >
                        Add New Admin Account
                    </Button>
                </Link>
            </div>
        </div>
    );
}
