import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ListProducts() {
    return (
        <div className="font-poppins bg-darkRed px-4 min-h-screen">
            <h1 className="text-center font-semibold text-2xl py-4">
                LIST PRODUCT
            </h1>
            <div className="flex gap-2 flex-wrap text-black sm:justify-center">
                <div className="w-full sm:w-[200px]">
                    <Select>
                        <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Input className="bg-white sm:w-[300px] lg:w-[400px]" type="text" placeholder="Generik" />
                <Button className="max-sm:w-full">Search</Button>
                <Link href={"/admin/dashboard"} className="w-full sm:w-min flex justify-end">
                    <Button variant={"destructive"}>Back to dashboard</Button>
                </Link>
            </div>
            <div className="mt-4">
                <div className="md:flex justify-around w-3/4 mb-4 hidden">
                    <p className="hidden md:flex">Product Name</p>
                    <p className="hidden md:flex">Type</p>
                    <p className="hidden md:flex">Categories</p>
                    <p className="hidden md:flex">Price</p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="bg-white p-2 rounded-lg text-black text-sm md:flex md:justify-around md:items-center">
                        <div className="flex justify-between">
                            <p className="md:hidden">Product Name:</p>
                            <p>Paracetamol</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Type:</p>
                            <p>Tablet</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Categories:</p>
                            <p>Generic - Antibiotik</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Price:</p>
                            <p>Rp 35.000</p>
                        </div>
                        <div className="flex gap-2 mt-3 md:mt-0">
                            <Button className="w-1/2">Edit</Button>
                            <Button variant={"destructive"} className="w-1/2">
                                Delete
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg text-black text-sm md:flex md:justify-around md:items-center">
                        <div className="flex justify-between">
                            <p className="md:hidden">Product Name:</p>
                            <p>Paracetamol</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Type:</p>
                            <p>Tablet</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Categories:</p>
                            <p>Generic - Antibiotik</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Price:</p>
                            <p>Rp 35.000</p>
                        </div>
                        <div className="flex gap-2 mt-3 md:mt-0">
                            <Button className="w-1/2">Edit</Button>
                            <Button variant={"destructive"} className="w-1/2">
                                Delete
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg text-black text-sm md:flex md:justify-around md:items-center">
                        <div className="flex justify-between">
                            <p className="md:hidden">Product Name:</p>
                            <p>Paracetamol</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Type:</p>
                            <p>Tablet</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Categories:</p>
                            <p>Generic - Antibiotik</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Price:</p>
                            <p>Rp 35.000</p>
                        </div>
                        <div className="flex gap-2 mt-3 md:mt-0">
                            <Button className="w-1/2">Edit</Button>
                            <Button variant={"destructive"} className="w-1/2">
                                Delete
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg text-black text-sm md:flex md:justify-around md:items-center">
                        <div className="flex justify-between">
                            <p className="md:hidden">Product Name:</p>
                            <p>Paracetamol</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Type:</p>
                            <p>Tablet</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Categories:</p>
                            <p>Generic - Antibiotik</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Price:</p>
                            <p>Rp 35.000</p>
                        </div>
                        <div className="flex gap-2 mt-3 md:mt-0">
                            <Button className="w-1/2">Edit</Button>
                            <Button variant={"destructive"} className="w-1/2">
                                Delete
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg text-black text-sm md:flex md:justify-around md:items-center">
                        <div className="flex justify-between">
                            <p className="md:hidden">Product Name:</p>
                            <p>Paracetamol</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Type:</p>
                            <p>Tablet</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Categories:</p>
                            <p>Generic - Antibiotik</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Price:</p>
                            <p>Rp 35.000</p>
                        </div>
                        <div className="flex gap-2 mt-3 md:mt-0">
                            <Button className="w-1/2">Edit</Button>
                            <Button variant={"destructive"} className="w-1/2">
                                Delete
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg text-black text-sm md:flex md:justify-around md:items-center">
                        <div className="flex justify-between">
                            <p className="md:hidden">Product Name:</p>
                            <p>Paracetamol</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Type:</p>
                            <p>Tablet</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Categories:</p>
                            <p>Generic - Antibiotik</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Price:</p>
                            <p>Rp 35.000</p>
                        </div>
                        <div className="flex gap-2 mt-3 md:mt-0">
                            <Button className="w-1/2">Edit</Button>
                            <Button variant={"destructive"} className="w-1/2">
                                Delete
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg text-black text-sm md:flex md:justify-around md:items-center">
                        <div className="flex justify-between">
                            <p className="md:hidden">Product Name:</p>
                            <p>Paracetamol</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Type:</p>
                            <p>Tablet</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Categories:</p>
                            <p>Generic - Antibiotik</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="md:hidden">Price:</p>
                            <p>Rp 35.000</p>
                        </div>
                        <div className="flex gap-2 mt-3 md:mt-0">
                            <Button className="w-1/2">Edit</Button>
                            <Button variant={"destructive"} className="w-1/2">
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
