'use client'
import HeaderCategories from '@/components/ui/productService/headerCategoriesName'
import HeaderProduct from '@/components/ui/productService/productCategoriesHeader'
import React, { useEffect } from 'react'
import Image from 'next/image';

type detailProductTypeProps ={ params: { id: string } }

const ProductDetails = (props: detailProductTypeProps) => {

    const {id} = props.params
    
    
    useEffect(() => {
console.log(id)
    
    })
  return (
    <div className=' h-full w-full border  items-center flex flex-col  bg-white py-8 mb-4'>
      <HeaderProduct pageTitle="ALL PRODUCTS" className='text-primaryBlueNavy flex flex-col w-full items-center ' />     
      <HeaderCategories title={'GENERIC PRODUCT'} />
      <div className="flex items-center justify-start align-middle w-full px-6 mt-2 gap-8">
        <div className="filter text-white bg-redBricks h-full w-max rounded-xl gap-2 pt-10 px-10 pb-40 border  " >
          <h2 className='text-4xl mb-10'>FILTER</h2>
          <div className=" filter-item flex flex-col align-middle justify-start items-start w-full">

            <div className="items flex flex-row  items-center align-middle justify-center gap-4">
              <input type="checkbox" id="myCheckbox" className="w-5 h-5 " />
              <label htmlFor="myCheckbox"  className="text-[30px] font-istokWeb ">Generic</label>
            </div>

            <div className="items flex flex-row  items-center align-middle justify-center gap-4">
              <input type="checkbox" id="myCheckbox" className="w-5 h-5 " />
              <label htmlFor="myCheckbox"  className="text-[30px] font-istokWeb ">Generic</label>
            </div>

            <div className="items flex flex-row  items-center align-middle justify-center gap-4">
              <input type="checkbox" id="myCheckbox" className="w-5 h-5 " />
              <label htmlFor="myCheckbox"  className="text-[30px] font-istokWeb ">Generic</label>
            </div>

            <div className="items flex flex-row  items-center align-middle justify-center gap-4">
              <input type="checkbox" id="myCheckbox" className="w-5 h-5 " />
              <label htmlFor="myCheckbox"  className="text-[30px] font-istokWeb ">Generic</label>
            </div>
           
          </div>
        </div>

{/* card Product */}
        <div className="products-container-500 w-full h-full flex gap-4">
          <div className="text-black border w-max  border-black border-opacity-20 hover:shadow-2xl text-3xl rounded-3xl transition-transform duration-10 ease-in-out hover:scale-105">
            <div className="product-image border  scale-90 p-3 rounded-3xl drop-shadow-2xl border-black border-opacity-20">
              <div className="image  ">
                <Image src={'https://i.pinimg.com/564x/ee/62/96/ee62964178d22165482a2c1a0343cb2a.jpg'} className='rounded-2xl' alt={''} width={400} height={400}></Image>
              </div>
            </div>
            <div className="metadata px-4">
              <div className="desc mx-4">
                <div className="title font-semibold font-poppins text-4xl text-primaryBlueNavy">Vitamin B-16</div>
                <div className="title text-lg text-black text-opacity-30">Generic Product</div>
              </div>
              <div className="price flex justify-between mx-4 mt-8 my-6 gap-2">
                <p className="border border-primaryBlack rounded-xl px-4 py-2 text-2xl font-semibold hover:bg-primaryBlack hover:text-white transition-transform duration-300 ease-in-out hover:scale-105 drop-shadow-2xl w-full items-center align-middle  justify-center content-center flex" style={{cursor:"pointer;"}}>Rp 20.000</p>
                <div className="marketplace">
                  <div className="border border-primaryBlack rounded-xl px-4 py-2 text-2xl font-semibold bg-green-600 text-white transition-transform duration-300 ease-in-out hover:scale-105 drop-shadow-2xl" style={{cursor:"pointer;"}}>Tokopedia</div>
                </div>
              </div>
            </div>
          </div>


        </div>


        
      </div>


    </div>
  )
}

export default ProductDetails
