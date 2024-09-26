import iso14000 from "@/assets/homepage/ISO 14000.svg";
import kan from "@/assets/homepage/KAN.svg";
import iso9000 from "@/assets/homepage/ISO 9000.svg";
import bpom from "@/assets/homepage/BPOM.svg";
import kemenkes from "@/assets/homepage/Logo Kementerian Kesehatan (Kemenkes) Republik Indonesia (SVG-2160p) - FileVector69.svg";
import mui from "@/assets/homepage/Halal MUI Logo (SVG-1080p) - FileVector69.svg";
import iaf from "@/assets/homepage/IAF.svg";
import Image from "next/image";
import lucas from "@/assets/homepage/Lucasdjaja-6.svg"

export default function Ceritificate() {
    return (
        <div>
            <div className="bg-darkRed py-4 font-poppins">
                <p className="text-center text-lg font-semibold">
                    Certificates Of Achievement
                </p>
                <div className="flex justify-evenly">
                    <Image
                        src={iso14000}
                        alt="ISO 14000"
                    />
                    <Image
                        src={kan}
                        alt="kan"
                    />
                    <Image
                        src={iso9000}
                        alt="iso9000"
                    />
                    <Image
                        src={bpom}
                        alt="bpom"
                    />
                    <Image
                        src={kemenkes}
                        alt="kemenkes"
                    />
                    <Image
                        src={mui}
                        alt="mui"
                    />
                    <Image
                        src={iaf}
                        alt="iaf"
                    />
                </div>
            </div>
            <div className="bg-white flex justify-center pt-5">
                <Image
                    src={lucas}
                    alt="lucas"
                    className="w-[800px]"
                />
            </div>
        </div>
    );
}
