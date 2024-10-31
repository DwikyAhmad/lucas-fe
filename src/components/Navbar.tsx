"use client";

import Image from "next/image";
import icon from "@/app/icon.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex font-poppins bg-darkRed justify-between px-4 py-2 items-center sticky top-0 z-20">
            <Image className="w-[25px]" src={icon} alt="LucasDjaja Logo" />
            <div
                className="flex md:hidden text-xl relative p-2 hover:cursor-pointer hover:bg-darkRed2 rounded-lg duration-200"
                onClick={() => setIsOpen((prev) => !prev)}
                ref={menuRef}
            >
                <HiOutlineMenu />
                {isOpen && (
                    <div>
                        <ul className="absolute top-full right-0 w-[200px] z-50 bg-darkRed2 text-white p-2 rounded-lg text-sm">
                            <Link href={'/'}>
                                <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                                    Home
                                </li>
                            </Link>
                            <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                                About Us
                            </li>
                            <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                                <a href="productsService">

                                Product & Services
                                </a>
                            </li>
                            <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                                News
                            </li>
                            <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                                LucaShop
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <ul className="hidden md:flex gap-2 font-light">
                <Link href={'/'}>
                    <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                        Home
                    </li>
                </Link>
                <Link href={'/#aboutus'}>
                    <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                        About Us
                    </li>
                </Link>
                <Link href={'/productsService'}>
                    <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                        Product & Services
                    </li>
                </Link>
                <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                    News
                </li>
                <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                    LucaShop
                </li>
            </ul>
            <Link href={'/login'}>
                <button className="bg-white hidden md:block text-primaryRed rounded-lg px-4 py-1 hover:brightness-75 duration-200">
                    Login
                </button>
            </Link>
        </div>
    );
}
