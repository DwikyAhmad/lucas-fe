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

export default function AdminPengaduan() {
    return (
        <div className="font-poppins bg-primaryBlueNavy py-4 min-h-screen">
            <h1 className="text-center font-semibold text-5xl">
                PUSAT PENGADUAN
            </h1>
            <div className="flex gap-4 justify-center mt-4">
                <div>
                    <Label htmlFor="category" className="text-white">
                        Filter by Category
                    </Label>
                    <Select>
                        <SelectTrigger
                            className="w-[180px] bg-white text-black"
                            id="category"
                        >
                            <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="apple">Generik</SelectItem>
                                <SelectItem value="banana">
                                    Antihistamin
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="stage" className="text-white">
                        Filter by Status
                    </Label>
                    <Select>
                        <SelectTrigger
                            className="w-[180px] bg-white text-black"
                            id="stage"
                        >
                            <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="apple">Solved</SelectItem>
                                <SelectItem value="banana">
                                    Not Solved
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="name" className="text-white">
                        Filter by Name
                    </Label>
                    <Input
                        id="name"
                        className="w-[300px] bg-white text-black"
                        placeholder="Cari pengaduan"
                    />
                </div>
            </div>
            <div className="px-4 flex flex-col items-center text-black">
                <div className="bg-white rounded-lg p-4 mt-4 w-[800px]">
                    <div className="font-semibold flex justify-between w-full">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                            <div>
                                <p>Anonymous</p>
                                <p className="text-sm">
                                    <span className="font-normal">
                                        Posted:{" "}
                                    </span>
                                    12 December 2024
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-red-500">Antihistamin</p>
                            <p
                                className="bg-green-700 text-white text-center rounded-xl py-1
                            text-xs font-normal w-min px-3 ml-auto"
                            >
                                Solved
                            </p>
                        </div>
                    </div>
                    <p className="mt-4">
                        Setelah meminum obat ini saya merasa ngantuk dan
                        terlelap dala larutan masa lalu yang tak lagi bersamaku
                    </p>
                    <div className="mt-4 flex justify-end">
                        <Button className="text-white bg-green-600 w-[200px] hover:bg-green-700">
                            Done
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
