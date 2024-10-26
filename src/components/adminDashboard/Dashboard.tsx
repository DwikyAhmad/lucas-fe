import Link from "next/link";
import { Button } from "../ui/button";

export default function Dashboard() {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-darkRed">
            <div>
                <div className="mb-10 text-white">
                    <h1 className="text-center font-bold text-2xl">
                        Admin Dashboard
                    </h1>
                    <h2 className="text-center font-semibold">LUCAS DJAJA</h2>
                </div>
                <div className="flex gap-4 text-white font-medium flex-wrap text-sm sm:text-md text-center max-sm:flex-col max-sm:items-center">
                    <div
                        className="bg-[#c96100] w-[200px] h-[60px] sm:w-[200px] sm:h-[100px] flex justify-center items-center rounded-xl 
                    hover:brightness-75 transition-all duration-200 hover:cursor-pointer "
                    >
                        <p>Add New Categories</p>
                    </div>
                    <Link href={'/admin/add/product'}>
                        <div
                            className="bg-[#c99000] w-[200px] h-[60px] sm:w-[200px] sm:h-[100px] flex justify-center items-center rounded-xl
                        hover:brightness-75 transition-all duration-200 hover:cursor-pointer"
                        >
                            <p>Add New Products</p>
                        </div>
                    </Link>
                    <Link href={'/admin/products'}>
                        <div
                            className="bg-[#c96100] w-[200px] h-[60px] sm:w-[200px] sm:h-[100px] flex justify-center items-center rounded-xl
                        hover:brightness-75 transition-all duration-200 hover:cursor-pointer"
                        >
                            <p>Manage Products</p>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-center sm:justify-end mt-10">
                    <Button variant={"destructive"} className="bg-[#C44536] w-24">Logout</Button>
                </div>
            </div>
        </div>
    );
}
