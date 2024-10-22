import Navbar from '@/components/navbar'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const productService = () => {
  return (
    <>
          <Navbar /> 
          <div className="bg-primaryBlueNavy w-full border py-4" >
              


            <div className='header flex'>
                  <div className="flex flex-col w-full align-middle  items-center space-x-2 justify-center g-4 ">
                        <div className="title w-max border-purple-200">
                            <h2 className='text-[80px] font-black '>PRODUCTS CATEGORIES</h2>
                        </div>
                        <div className="searchbar w-6/12 border-950 flex">
                            
                            <Input type="email" placeholder="Email" className='text-primaryBlueNavy border-b-primaryBlack bg-white font-poppins mx-2 h-12' />
                            <Button type="submit">Subscribe</Button>
                        </div>
                </div>              
            </div>
          </div>
    </>
  )
}

export default productService
