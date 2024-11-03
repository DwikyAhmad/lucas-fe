'use client'

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


export default function Categories() {
    const [name, setName] = useState("");

    const handleSubmit = async () => { 
        try { 
            const myPromise = axios.post(`/api/category/create`, {
                name,
            });
            const response = await toast.promise(myPromise, {
                loading: "Creating category...",
                success: (response) => { 
                    if (response.data.statusCode >= 400) {
                        throw new Error(response.data.message);
                    }
                    return "Category successfully created";
                },
                error: (error) => error.message,
            });
            if (response.data.code === 200) {
                setName("");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="text-black font-poppins min-h-screen pb-10 bg-darkRed flex flex-col items-center">
            <Toaster />
            <h1 className="text-white text-3xl font-semibold pt-8 text-center">
                ADD NEW CATEGORIES
            </h1>
            <div className="bg-white w-[280px] sm:w-[630px] p-5 mt-8 rounded-lg flex flex-col gap-5">
                <div className="flex gap-5 justify-between flex-wrap">
                    <Label
                        className="text-nowrap self-center font-semibold"
                        htmlFor="productName"
                    >
                        Category Name
                    </Label>
                    <Input
                        className="w-[450px]"
                        type="text"
                        id="categoryName"
                        name="categoryName"
                        placeholder="Category Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex justify-between flex-wrap gap-y-4 max-sm:justify-end max-sm:flex-wrap-reverse">
                    <div>
                        <Link href={"/admin/dashboard"}>
                            <Button variant={"destructive"}>Back</Button>
                        </Link>
                    </div>
                    <div className="flex gap-4 flex-wrap max-sm:justify-end max-sm:w-full">
                        <Button onClick={handleSubmit}>Create Category</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
