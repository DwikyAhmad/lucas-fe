import Image from "next/image";
import icon from "@/app/icon.svg"

export default function Navbar() {
    return (
        <div className="flex font-poppins bg-darkRed justify-between px-4 py-2 items-center">
            <Image
                className="w-[25px]"
                src={icon}
                alt="LucasDjaja Logo"
            />
            <ul className="flex gap-2 font-light">
                <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">Home</li>
                <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">About Us</li>
                <a className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer" href="/productsService">Product & Services</a>
                <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">News</li>
                <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">LucaShop</li>
            </ul>
            <button className="bg-white text-primaryRed rounded-lg px-4 py-1 hover:brightness-75 duration-200">
                Login
            </button>
        </div>
    );
}
