"use client";

import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

type complaints = {
    id: string;
    description: string;
    productName: string;
    category: string[];
    status: "Wait for response" | "Solved";
    isAnonymous: boolean;
    createdAt: Date;
    user?: {
        id: string;
        name: string;
        email: string;
    };
};

type categories = {
    id: string;
    name: string;
    description: string;
};

interface props {
    complaints: complaints[];
    categories: categories[];
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(date);
};

export default function AdminPengaduan({ complaints, categories }: props) {
    const router = useRouter();

    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [selectedStatus, setSelectedStatus] = useState<string>("all");
    const [keyword, setKeyword] = useState<string>("");

    const filterComplaints = () =>
        complaints.filter((complaint) => {
            if (selectedCategory !== "all" && selectedStatus == "all") {
                return (
                    complaint.category.includes(selectedCategory) &&
                    complaint.description
                        .toLowerCase()
                        .includes(keyword.toLowerCase())
                );
            }
            if (selectedStatus !== "all" && selectedCategory == "all") {
                return (
                    complaint.status === selectedStatus &&
                    complaint.description
                        .toLowerCase()
                        .includes(keyword.toLowerCase())
                );
            }
            if (selectedCategory !== "all" && selectedStatus !== "all") {
                return (
                    complaint.category.includes(selectedCategory) &&
                    complaint.status === selectedStatus &&
                    complaint.description
                        .toLowerCase()
                        .includes(keyword.toLowerCase())
                );
            }
            if (selectedCategory == "all" && selectedStatus == "all") {
                return complaint.description
                    .toLowerCase()
                    .includes(keyword.toLowerCase());
            }
            return false;
        });

    const updatePengaduan = async (id: string) => {
        try {
            const myPromise = axios.patch(`/api/complaint/update/${id}`);
            await toast.promise(myPromise, {
                loading: "Loading",
                success: (response) => {
                    if (response.data.code) {
                        return response.data.message;
                    } else {
                        throw new Error(response.data.message);
                    }
                },
                error: (err) => err.message,
            });
            if ((await myPromise).data.code) {
                router.refresh();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="font-poppins bg-primaryBlueNavy py-4 min-h-screen">
            <Toaster />
            <h1 className="text-center font-semibold text-2xl lg:text-5xl">
                PUSAT PENGADUAN
            </h1>
            <div className="flex gap-4 justify-center mt-4 lg:flex-row flex-col items-center">
                <div>
                    <Label htmlFor="category" className="text-white">
                        Filter by Category
                    </Label>
                    <Select
                        value={selectedCategory}
                        onValueChange={(value) => setSelectedCategory(value)}
                    >
                        <SelectTrigger
                            className="w-[280px] lg:w-[180px] bg-white text-black"
                            id="category"
                        >
                            <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="all">All</SelectItem>
                                {categories &&
                                    categories.map((category, index) => (
                                        <SelectItem
                                            key={index}
                                            value={category.name}
                                        >
                                            {category.name}
                                        </SelectItem>
                                    ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="stage" className="text-white">
                        Filter by Status
                    </Label>
                    <Select
                        value={selectedStatus}
                        onValueChange={(value) => setSelectedStatus(value)}
                    >
                        <SelectTrigger
                            className="w-[280px] lg:w-[180px] bg-white text-black"
                            id="stage"
                        >
                            <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="Wait for response">
                                    Wait for response
                                </SelectItem>
                                <SelectItem value="Solved">Solved</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="name" className="text-white">
                        Filter by Description
                    </Label>
                    <Input
                        id="name"
                        className="w-[280px] lg:w-[300px] bg-white text-black"
                        placeholder="Cari pengaduan"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>
            </div>
            <div className="px-4 flex flex-col items-center text-black">
                {complaints &&
                    filterComplaints().map((complaint, index) => (
                        <div
                            className="bg-white rounded-lg p-4 mt-4 w-full lg:w-[800px]"
                            key={index}
                        >
                            <div className="font-semibold flex justify-between w-full flex-col lg:flex-row gap-2">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                                    <div>
                                        <p>
                                            {complaint.isAnonymous
                                                ? "Anonymous"
                                                : complaint.user?.name}
                                        </p>
                                        <p className="text-sm">
                                            <span className="font-normal">
                                                Posted:{" "}
                                            </span>
                                            {formatDate(
                                                complaint.createdAt.toString()
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-red-500 lg:text-end">
                                        {complaint.category.join(", ")}
                                    </p>
                                    <p
                                        className={`${
                                            complaint.status === "Solved"
                                                ? "bg-green-700"
                                                : "bg-darkRed"
                                        } text-white text-center rounded-xl py-1 text-xs font-normal w-max px-3 lg:ml-auto`}
                                    >
                                        {complaint.status}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 break-words">{complaint.description}</p>
                            <div className="mt-4 flex justify-end">
                                {complaint.status === "Wait for response" && (
                                    <Button
                                        className="text-white bg-green-600 w-[200px] hover:bg-green-700"
                                        onClick={() =>
                                            updatePengaduan(complaint.id)
                                        }
                                    >
                                        Done
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                {filterComplaints().length === 0 && (
                    <p className="text-white mt-12">No complaints found</p>
                )}
            </div>
            <div className="w-full sm:w-min flex justify-end bottom-5 right-5 lg:right-4 lg:top-14 fixed">
                <Button variant={"destructive"} asChild>
                    <Link href={"/admin/dashboard"}>Back to dashboard</Link>
                </Button>
            </div>
        </div>
    );
}
