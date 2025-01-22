import Image from "next/image";
import blob from "../../assets/blob/Vector 12.svg";
import construction from "../../assets/blob/construction.svg";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ComingSoon() {
    return (
        <div className="min-h-[700px] relative flex items-center justify-evenly font-poppins">
            <div className="relative z-10">
                <h1 className="text-primaryBlueNavy text-2xl">
                    We Are Coming Soon
                </h1>
                <h2 className="text-primaryRed text-4xl font-bold mb-8">
                    LUCAS SHOP
                </h2>
                <Link href={"/"}>
                    <Button>Dashboard</Button>
                </Link>
                <p className="text-primaryBlueNavy mt-2 font-semibold">
                    Website Is Under Construction
                </p>
            </div>
            <div className="hidden lg:flex">
                <Image
                    src={construction}
                    alt="construction"
                    className="z-10 relative w-[450px]"
                />
            </div>
            <Image
                src={blob}
                alt="blob"
                className="absolute bottom-0 z-0 w-full"
            />
        </div>
    );
}
