import Image from "next/image";
import sites from "@/assets/facilitiesAndProducts/sites.svg";
import productionfacilities from "@/assets/facilitiesAndProducts/productionfacilities.svg";
import labor from "@/assets/facilitiesAndProducts/labor.svg";
import generic from "@/assets/facilitiesAndProducts/generic.svg";
import suplemen from "@/assets/facilitiesAndProducts/suplemen.svg";
import herbal from "@/assets/facilitiesAndProducts/herbal.svg";

export default function FacilitiesAndProducts() {
    return (
        <div className="font-poppins">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl">
                    <h2 className="text-3xl font-semibold text-primaryRed mb-8 border-b-2 border-primaryRed pb-2 inline-block">
                        Facilities
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center text-primaryRed">
                            <div className="bg-gray-100 p-6 rounded-full mb-4 hover:bg-gray-200 transition-colors">
                                <Image
                                    src={sites}
                                    alt="Sites"
                                    className="w-16 h-16"
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">
                                2 Sites
                            </h3>
                            <p className="text-sm">
                                Ciwastro & Kiaracondong
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center text-primaryRed">
                            <div className="bg-gray-100 p-6 rounded-full mb-4 hover:bg-gray-200 transition-colors">
                                <Image
                                    src={productionfacilities}
                                    alt="Production Facilities"
                                    className="w-16 h-16"
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">
                                12 Production Facilities
                            </h3>
                        </div>

                        <div className="flex flex-col items-center text-center text-primaryRed">
                            <div className="bg-gray-100 p-6 rounded-full mb-4 hover:bg-gray-200 transition-colors">
                                <Image
                                    src={labor}
                                    alt="Labor Units"
                                    className="w-16 h-16"
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">
                                2 Unit Labor
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="bg-primaryRed p-6 text-white">
                    <h2 className="text-3xl font-semibold mb-8 border-b-2 border-white pb-2 inline-block">
                        Products
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-white/10 p-6 rounded-full mb-4 hover:bg-white/20 transition-colors">
                                <Image
                                    src={generic}
                                    alt="Generic Products"
                                    className="w-16 h-16"
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">
                                Generic & E-Catalog
                            </h3>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-white/10 p-6 rounded-full mb-4 hover:bg-white/20 transition-colors">
                                <Image
                                    src={suplemen}
                                    alt="Supplements"
                                    className="w-16 h-16"
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">
                                Suplemen
                            </h3>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-white/10 p-6 rounded-full mb-4 hover:bg-white/20 transition-colors">
                                <Image
                                    src={herbal}
                                    alt="Herbal Products"
                                    className="w-16 h-16"
                                />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">
                                Herbal
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
