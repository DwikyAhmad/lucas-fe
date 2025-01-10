"use client";

import Image from "next/image";
import icon from "@/app/icon.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getUser } from "@/utils/utils";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { handleLogout } from "./userAuth/authServerAction";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);

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

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                await getUser();
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            }
            setLoading(false);
        };

        checkAuthStatus();
    }, []);

    const handleLogoutSubmit = async () => { 
        const success = await handleLogout();
        if (success) {
            window.location.href = '/';
        }
    }

    return (
        <div className="flex font-poppins bg-darkRed justify-between px-4 py-2 items-center sticky top-0 z-20">
            <Image className="w-[25px]" src={icon} alt="LucasDjaja Logo" />
            <div
                className="flex lg:hidden text-xl relative p-2 hover:cursor-pointer hover:bg-darkRed2 rounded-lg duration-200"
                onClick={() => setIsOpen((prev) => !prev)}
                ref={menuRef}
            >
                <HiOutlineMenu />
                {isOpen && (
                    <div>
                        <ul className="absolute top-full right-0 w-[200px] z-50 bg-darkRed2 text-white p-2 rounded-lg text-sm">
                            <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                                About Us
                            </li>
                            <li>
                                <Link
                                    href="/category"
                                    className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer"
                                >
                                    Product & Services
                                </Link>
                            </li>
                            <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                                News
                            </li>
                            <li>
                                <Link
                                    href="/complaint"
                                    className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer"
                                >
                                    Complaint
                                </Link>
                            </li>
                            <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                                <Link
                                    href={{
                                        pathname: "/products",
                                        query: { filter: "Generic" },
                                    }}
                                >
                                    LucaShop
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <ul className="hidden lg:flex gap-2 font-light items-center">
                <li>
                    <Link
                        href="/"
                        className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer"
                    >
                        Home
                    </Link>
                </li>
                <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                    About Us
                </li>
                <li>
                    <Link
                        className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer"
                        href="/category"
                    >
                        Product & Services
                    </Link>
                </li>
                <li className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer">
                    News
                </li>
                <li>
                    <Link
                        href="/complaint"
                        className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer"
                    >
                        Complaint
                    </Link>
                </li>
                <li>
                    <Link
                        href={{
                            pathname: "/products",
                            query: { filter: "Generik" },
                        }}
                        className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer"
                    >
                        LucaShop
                    </Link>
                </li>
            </ul>
            {loading && (
                <div className="bg-primaryBlack rounded-xl justify-between items-center py-2 w-[85px] h-[36px] px-4 text-xl hidden md:flex"></div>
            )}
            {isAuthenticated && !loading && (
                <div className="items-center hidden lg:flex">
                    <div
                        className="relative flex items-center"
                    >
                        <div className="mr-2 bg-primaryBlack rounded-full p-2 absolute -left-12">
                            <FaCartShopping />
                        </div>
                        <div
                            className="bg-primaryBlack rounded-xl flex justify-between items-center py-2 w-[85px] px-4 text-xl relative
                            hover:cursor-pointer hover:brightness-75 duration-200"
                            onClick={() => setIsOpenProfile((prev) => !prev)}
                        >
                            <CgProfile />
                            <MdOutlineKeyboardArrowDown />
                        </div>
                        {isOpenProfile && (
                            <ul
                                className="absolute top-[40px] bg-white text-black w-max right-0 rounded-xl text-base py-2 flex flex-col gap-2
                            border"
                            >
                                <li className="hover:bg-slate-300 duration-200 px-4 hover:cursor-pointer">
                                    Edit Profile
                                </li>
                                <li className="hover:bg-slate-300 duration-200 px-4 hover:cursor-pointer">
                                    Cart
                                </li>
                                <li className="hover:bg-slate-300 duration-200 px-4 hover:cursor-pointer">
                                    Wishlist
                                </li>
                                <li className="hover:bg-slate-300 duration-200 px-4 hover:cursor-pointer"
                                onClick={() => handleLogoutSubmit()}>
                                    Logout
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            )}
            {!isAuthenticated && !loading && (
                <Link href={"/login"} className="hidden lg:block">
                    <button className="bg-white text-primaryRed rounded-lg px-4 py-1 hover:brightness-75 duration-200">
                        Login
                    </button>
                </Link>
            )}
        </div>
    );
}
