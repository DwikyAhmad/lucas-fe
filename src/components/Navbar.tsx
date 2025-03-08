"use client";

import Image from "next/image";
import icon from "@/app/icon.svg";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getUser } from "@/utils/utils";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { handleLogout } from "./userAuth/authServerAction";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);

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
            window.location.href = "/";
        }
    };

    return (
        <div className="flex font-poppins bg-darkRed justify-between px-4 py-2 items-center sticky top-0 z-20">
            <Image className="w-[25px]" src={icon} alt="LucasDjaja Logo" />
            <div className="lg:hidden font-poppins">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="text-xl p-2 hover:bg-darkRed2 rounded-lg duration-200">
                            <Menu />
                        </button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="bg-darkRed2 text-white border-none"
                    >
                        <SheetTitle className="font-poppins">
                            Menu
                        </SheetTitle>
                        <nav className="flex flex-col gap-2  mt-4 font-poppins">
                            <Link
                                href="/"
                                className="hover:bg-[#4A0D0D] px-3 py-2 rounded-lg"
                            >
                                Home
                            </Link>
                            <Link
                                href="/#aboutus"
                                className="hover:bg-[#4A0D0D] px-3 py-2 rounded-lg"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/category"
                                className="hover:bg-[#4A0D0D] px-3 py-2 rounded-lg"
                            >
                                Product & Services
                            </Link>
                            <Link
                                href="/news"
                                className="hover:bg-[#4A0D0D] px-3 py-2 rounded-lg"
                            >
                                News
                            </Link>
                            <Link
                                href="/complaint"
                                className="hover:bg-[#4A0D0D] px-3 py-2 rounded-lg"
                            >
                                Pharmacovigilance
                            </Link>
                            <Link
                                href={{
                                    pathname: "/products",
                                    query: { filter: "Generic" },
                                }}
                                className="hover:bg-[#4A0D0D] px-3 py-2 rounded-lg"
                            >
                                LucaShop
                            </Link>
                            {isAuthenticated && !loading && (
                                <div className="mt-4">
                                    <div className="font-medium text-lg mb-2">
                                        Akun
                                    </div>
                                    <Link
                                        href="/profile"
                                        className="hover:bg-[#4A0D0D] px-3 py-2 rounded-lg block"
                                    >
                                        Edit Profile
                                    </Link>
                                    <Link
                                        href="/cart"
                                        className="hover:bg-[#4A0D0D] px-3 py-2 rounded-lg block"
                                    >
                                        Cart
                                    </Link>
                                    <Link
                                        href="/wishlist"
                                        className="hover:bg-[#4A0D0D] px-3 py-2 rounded-lg block"
                                    >
                                        Wishlist
                                    </Link>
                                    <button
                                        onClick={() => handleLogoutSubmit()}
                                        className="bg-[#4A0D0D] hover:bg-[#6A1D1D] px-3 py-2 rounded-lg w-full text-left font-medium flex items-center gap-2 transition-colors duration-200 border border-white/20"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out">
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                            <polyline points="16 17 21 12 16 7"></polyline>
                                            <line x1="21" y1="12" x2="9" y2="12"></line>
                                        </svg>
                                        Logout
                                    </button>
                                </div>
                            )}
                            {!isAuthenticated && !loading && (
                                <Link href="/login">
                                    <button className="bg-white text-primaryRed rounded-lg px-4 py-2 w-full mt-4 hover:brightness-75 duration-200">
                                        Login
                                    </button>
                                </Link>
                            )}
                        </nav>
                    </SheetContent>
                </Sheet>
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
                <li>
                    <Link
                        href={"/#aboutus"}
                        className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer"
                    >
                        About Us
                    </Link>
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
                    <Link
                        className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer"
                        href="/news"
                    >
                        News
                    </Link>
                </li>
                <li>
                    <Link
                        href="/complaint"
                        className="hover:bg-[#4A0D0D] px-3 py-1 rounded-lg cursor-pointer"
                    >
                        Pharmacovigilance
                    </Link>
                </li>
                <li>
                    <Link
                        href={{
                            pathname: "/products",
                            // query: { filter: "Generik" },
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
                    <div className="relative flex items-center">
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
                                <li
                                    className="hover:bg-slate-300 duration-200 px-4 hover:cursor-pointer"
                                    onClick={() => handleLogoutSubmit()}
                                >
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
