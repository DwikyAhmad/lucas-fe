import Navbar from '@/components/navbar'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image';

const cardProducts = () => {
  return (
    <div className=" flex flex-col align-top justify-center content-center items-center w-full p-4   ">
                    <div className="flex border-2  bg-white hover:bg-gray-200 w-[80%] justify-center    text-black round-xl p-6 rounded-2xl items-center " >
                        <div className="img-categoreis w-fit h-fit  mr-10 ">
                            <Image 
                                src="https://i.pinimg.com/enabled_lo/564x/c4/12/96/c412966a57c253f97933d565982f9df3.jpg"
                                alt="Deskripsi gambar"
                                    width={600} 
                                height={600} 
                                className="rounded-2xl"
                                />
                        </div>
                        <div className="content flex flex-col w-full content-start items-start mb-4 ">
                            <div className="title font-poppins text-[48px] font-bold text-primaryRed">Generic Product</div>
                            <div className="desc font-poppins text-[24px] text-justify w-[80%]">Sejak tahun 2003, Lucas group adalah satu-satunya perusahaan swasta  swasta yang ditunjuk untuk mensuplai kebutuhan obat nasional, selain tiga BUMN. Sampai dengan saat ini Lucas Group sudah  bergabung ke dalam Kimia Farma Group dan masih aktif mengikuti  tender e-catalog untuk memasok kebutuhan obat obatan generic ke  seluruh wilayah Indonesia.</div>

                            <div className="cateogryTag flex flex-row gap-3 mt-4 p-2">
                                <div className="text-[20px] font-poppins bg-orange p-2 rounded-full font-medium">Generic</div>
                                <div className="text-[20px] font-poppins bg-primaryBlueNavy text-white p-2 rounded-full font-medium">Antibiotk</div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default cardProducts
