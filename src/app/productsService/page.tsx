import Navbar from '@/components/navbar'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image';
import CardProducts from '@/components/ui/cardProducts';


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

                <div className="bg-primaryBlueNavy">
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />

                    
                </div>

        
            
            
            
            
            </div>
        </>
    )
}

export default productService
