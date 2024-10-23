import Navbar from '@/components/navbar'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image';


const productService = () => {
    return (
        <>
            <Navbar />

            <div className="bg-primaryBlueNavy w-full  py-4 flex flex-col justify-center align-middle   " >
                <div className='header flex mb-10'>
                    <div className="flex flex-col w-full align-middle  items-center space-x-2 justify-center g-4 ">
                        <div className="title w-max ">
                            <h2 className='text-[80px] font-black '>PRODUCTS CATEGORIES</h2>
                        </div>
                        <div className="searchbar w-6/12 flex">
                            <Input type="input" placeholder="Search categories here... " className='text-primaryBlueNavy border-b-primaryBlack border-4 bg-white font-poppins mx-2 h-12' />
                            <Button type="submit" className='h-full'>Search</Button>
                        </div>
                    </div>
                </div>

            <a href="">
                
                <div className=" flex flex-col align-top justify-center content-center items-center w-full p-4  shadow-lg ">
                    <div className="flex border-2  bg-white hover:bg-gray-200 w-[80%]   text-black round-xl p-6 rounded-2xl " >
                        <div className="img-categoreis w-fit h-fit  mr-20 ">
                            <Image 
                                src="https://i.pinimg.com/enabled_lo/564x/c4/12/96/c412966a57c253f97933d565982f9df3.jpg" // Lokasi gambar di public folder
                                alt="Deskripsi gambar"
                                width={450} // Lebar gambar
                                height={450} // Tinggi gambar
                                className="rounded-2xl"
                                />
                        </div>
                        <div className="content flex flex-col w-full content-start items-start mb-4 ">
                            <div className="title font-poppins text-[48px] font-bold text-primaryRed">Generic Product</div>
                            <div className="desc font-poppins text-[24px] text-justify w-[80%]">Sejak tahun 2003, Lucas group adalah satu-satunya perusahaan swasta  swasta yang ditunjuk untuk mensuplai kebutuhan obat nasional, selain  selain tiga BUMN. Sampai dengan saat ini Lucas Group sudah  bergabung ke dalam Kimia Farma Group dan masih aktif mengi- kuti  tender e catalog untuk memasok kebutuhan obat obatan generic ke  seluruh wilayah Indonesia.</div>

                            <div className="cateogryTag flex flex-row gap-3 mt-4 p-2">
                                <div className="text-[20px] font-poppins bg-orange-400 p-2 rounded-full font-medium">Generic</div>
                                <div className="text-[20px] font-poppins bg-primaryBlueNavy text-white p-2 rounded-full font-medium">Antibiotk</div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
            
            
            
            </a>
            
            
            
            
            
            </div>
        </>
    )
}

export default productService
