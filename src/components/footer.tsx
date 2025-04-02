import Image from "next/image";
import logo from "@/app/icon.svg";
import instagram from "@/assets/footer/Instagram.svg";
import whatsapp from "@/assets/footer/whatsapp.svg";
import email from "@/assets/footer/email.svg";
import phone from "@/assets/footer/phone.svg";
import map from "@/assets/footer/map.svg";
import men from "@/assets/footer/men.svg";
import women from "@/assets/footer/women.svg";

export default function Footer() {
    return (
        <div className="bg-primaryRed text-white font-poppins relative overflow-hidden">
            {/* Background Images */}
            {/* Women on top right */}
            <div className="absolute top-0 right-0 h-full">
                <Image
                    src={women}
                    alt="background"
                    className="object-cover w-[400px] opacity-70"
                    style={{
                        clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                        objectPosition: "right top",
                    }}
                />
            </div>
            {/* Men on bottom left */}
            <div className="absolute bottom-0 left-0">
                <Image
                    src={men}
                    alt="background"
                    className="object-cover w-[400px] opacity-70"
                    style={{
                        clipPath: "polygon(0 0, 100% 100%, 0 100%, 0 100%)",
                        objectPosition: "left bottom",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 md:px-8 lg:px-16 py-12">
                {/* Logo and Description */}
                <div className="bg-primaryBlueNavy rounded-xl p-6 w-fit mb-12 flex gap-8">
                    <div className="flex items-center mb-4">
                        <div className="bg-primaryRed p-2">
                            <Image
                                src={logo}
                                alt="Lucas Djaja"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-nowrap">LUCAS DJAJA</h1>
                        <p className="text-sm font-extralight opacity-90 text-center w-[200px]">
                            &quot;A reliable pharma company that improves people
                            health and quality of life&quot;
                        </p>
                    </div>
                </div>

                {/* Company Addresses */}
                <div className="flex flex-wrap gap-8 mb-12">
                    <div className="w-[400px]">
                        <h2 className="font-bold text-xl">PT LUCAS DJAJA</h2>
                        <p className="text-sm opacity-90 font-light underline">
                            Jl. Ciwastra RT.07 / RW.06, Kel.Margasari, Kec.Buah
                            Batu, Bandung, West Java, Indonesia
                        </p>
                    </div>
                    <div className="w-[400px]">
                        <h2 className="font-bold text-xl">
                            PT MARIN LIZA FARMASI
                        </h2>
                        <p className="text-sm opacity-90 font-light underline">
                            Jl. Terusan Kiaracondong No.43, Kec.Buah Batu,
                            Bandung, West Java, Indonesia
                        </p>
                    </div>
                </div>

                {/* Map */}
                <div className="flex justify-center">
                    <div className="mb-12 rounded-lg  max-w-[600px]">
                        <Image
                            src={map}
                            alt="Location Map"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Contact Information */}
                <div className="flex justify-center">
                    <div className="flex gap-4 lg:gap-12 flex-wrap">
                        <div className="flex items-center gap-2">
                            <Image
                                src={instagram}
                                alt="Instagram"
                                width={32}
                                height={32}
                            />
                            <span>lucas group</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                src={phone}
                                alt="Phone"
                                width={32}
                                height={32}
                            />
                            <div className="text-sm">
                                <p>+62 227564032 | +62 8131214898</p>
                                <p>+62 8775055102 | +62 87730560102</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                src={email}
                                alt="Email"
                                width={32}
                                height={32}
                            />
                            <div className="text-sm">
                                <p>marketing@lucaspharmaceutical.co.id</p>
                                <p>penjualanlucasmarin@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                src={whatsapp}
                                alt="WhatsApp"
                                width={32}
                                height={32}
                            />
                            <span>+62 81234567890</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-primaryBlueNavy text-center py-4 relative z-10">
                <p className="text-sm">
                    © 2024 - Kimia Farma. All Right Reserved.
                </p>
            </div>
        </div>
    );
}
