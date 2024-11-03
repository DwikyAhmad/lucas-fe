'use client'
import HeaderCategories from '@/components/ui/productService/headerCategoriesName'
import HeaderProduct from '@/components/ui/productService/productCategoriesHeader'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { IoCart } from 'react-icons/io5';
import Footer from '@/components/footer';
import {  useRouter, useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar';


// type detailProductTypeProps ={ params: { filter: string } }

const ProductDetails = () => {
  const router = useRouter()
  const param = useSearchParams()
  const [search,setSearch] = useState("")
  const  filter  =(param ) || ""


    useEffect(() => {
      console.log("INI PARAM : "+param.get("filter")) //cara dapetinnya kayak key value
      if ( param == undefined || param == null || param.toString() == "") {
        setSearch("all")
        console.log(search)
        
      }
    
    },[filter])
  return (
    <div className=' h-full w-full   bg-white  gap-4 '>
      <Navbar />

      <HeaderProduct pageTitle="ALL PRODUCTS" className='text-primaryBlueNavy flex flex-col   w-full pt-4 items-center ' />     
      <HeaderCategories title={'GENERIC PRODUCT'} />
      <div className="flex lg:flex-row sm:flex-col flex-col items-center justify-start align-middle w-full px-6 mt-2 gap-8">
        <div className="filter text-white bg-redBricks h-full lg:w-max w-full lg:rounded-xl rounded-full px-4 py-2 gap-2 lg:pt-5 lg:px-10 lg:pb-20 border flex lg:flex-col lg:items-start items-center align-middle justify-center " >
          <h2 className='md:text-2xl text-xl mb-5 font-semibold lg:flex  hidden'>FILTER</h2>
          <div className=" filter-item flex lg:flex-col align-middle justify-start  flex-row border border-black items-start  gap-2  lg:overflow-hidden overflow-y-auto lg:w-full w-min  scroll-smooth">

            <div className="items flex flex-row  items-center align-middle justify-center gap-4">
              <input type="checkbox" id="myCheckbox" className="w-5 h-5 " />
              <label htmlFor="myCheckbox"  className="md:text-xl text-sm font-istokWeb ">Generic</label>
            </div>

            <div className="items flex flex-row  items-center align-middle justify-center gap-4">
              <input type="checkbox" id="myCheckbox" className="w-5 h-5 " />
              <label htmlFor="myCheckbox"  className="md:text-xl text-sm font-istokWeb ">Generic</label>
            </div>

            <div className="items flex flex-row  items-center align-middle justify-center gap-4">
              <input type="checkbox" id="myCheckbox" className="w-5 h-5 " />
              <label htmlFor="myCheckbox"  className="md:text-xl text-sm font-istokWeb ">Generic</label>
            </div>

            <div className="items flex flex-row  items-center align-middle justify-center gap-4">
              <input type="checkbox" id="myCheckbox" className="w-5 h-5 " />
              <label htmlFor="myCheckbox"  className="md:text-xl text-sm font-istokWeb ">Generic</label>
            </div>
           
          </div>
        </div>

{/* card Product */}
        <div className="products-container-500 w-full h-full flex gap-4 mb-8 ">
          <div className="text-black border md:w-max w-min flex items-center  flex-col border-black border-opacity-20 hover:shadow-xl text-3xl rounded-2xl transition-transform duration-10 ease-in-out  lg:py-1 py-0 pb-2   " style={{cursor:"pointer;"}} onClick={() => router?.push(`/products/1`)}>
            <div className="product-image border    rounded-xl drop-shadow-2xl border-black border-opacity-20 flex items-center justify-center align-middle w-auto h-max mb-2 scale-75 md:scale-100  ">
                <Image src={'https://i.pinimg.com/564x/ee/62/96/ee62964178d22165482a2c1a0343cb2a.jpg'} className=' rounded-xl w-max  border border-black ' alt={''} width={150} height={100}></Image>
            </div>
            <div className="metadata md:px-4 px-2 ">
              <div className="desc md:mx-4  ">
                <div className="title font-semibold font-poppins lg:text-2xl text-xl text-primaryBlueNavy">Vitamin B-16</div>
                <div className="title text-xs font-medium text-black text-opacity-30">Generic Product</div>
              </div>
              <div className="price flex justify-between  md:mt-8 mt-4  md:gap-4 gap-2">
                <p className="border  border-primaryBlack md:rounded-xl px-1 md:py-1 py-1 lg:text-xl text-lg text-nowrap font-semibold hover:bg-primaryBlack hover:text-white transition-transform duration-300 ease-in-out hover:scale-105 drop-shadow-2xl md:w-full h-max w-max items-center align-middle  justify-center content-center flex rounded-full" style={{cursor:"pointer;"}} onClick={() => router?.push('/products/1')} >Rp 20.000</p>
                <div className="marketplace">
                  <div className="border border-primaryBlack rounded-xl px-2 py-1 text-2xl font-semibold h-full items-center flex bg-primaryYellow text-white transition-transform duration-300 ease-in-out hover:scale-105 md:scale-100 scale-75drop-shadow-2xl hover:bg-darkYellow " style={{ cursor: "pointer;" }}> <IoCart />
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>


        
      </div>


      <Footer />
    </div>
  )
}

export default ProductDetails
