'use client'
import HeaderCategories from '@/components/ui/productService/headerCategoriesName'
import HeaderProduct from '@/components/ui/productService/productCategoriesHeader'
import React, { useEffect } from 'react'

type detailProductTypeProps ={ params: { id: string } }

const ProductDetails = (props: detailProductTypeProps) => {

    const {id} = props.params
    
    
    useEffect(() => {
console.log(id)
    
    })
  return (
    <div className=' h-[100vh] w-full border border-black items-center flex flex-col  bg-white'>
      <HeaderProduct pageTitle="ALL PRODUCTS" className='text-primaryBlueNavy flex flex-col w-full items-center' />     
      <HeaderCategories title={'GENERIC PRODUCT'} />
      <div className="flex items-center justify-start align-middle w-full px-4 mt-2">
        <div className="filter text-white bg-redBricks h-full w-max rounded-xl gap-2 pt-10 px-10 pb-40 mx-10 border border-black " >
          <h2 className='text-[48px]'>FILTER</h2>
          <div className="pl-6 filter-item flex flex-col align-middle justify-start items-start w-full">

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


        <div className="products">
          <div className="text-black text-3xl">INI PRODUcT</div>
        </div>


        
      </div>


    </div>
  )
}

export default ProductDetails
