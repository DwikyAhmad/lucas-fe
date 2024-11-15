/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import HeaderCategories from '@/components/ui/productService/headerCategoriesName'
import HeaderProduct from '@/components/ui/productService/productCategoriesHeader'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { IoCart } from 'react-icons/io5';
import Footer from '@/components/footer';
import { useRouter, useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar';
import { Suspense } from 'react';
import API_URL from '@/utils/utils';
import axios from 'axios';


// type detailProductTypeProps ={ params: { filter: string } }

interface   Category {
  id: string;
  name: string;
  description: string;
  // add other fields here if there are any, like `description`, `imageUrl`, etc.
}
const ProductDetails = async () => {
  const router = useRouter()
  const param = useSearchParams()
  const filter = (param.get("filter")) || ""
  const [search, setSearch] = useState("")
  const [categories,setCategories] = useState<Category[]>([]);
  const [listFilter, setListFilter] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);



  const getCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/category`);
      const productsResponse = response.data.categories
      setCategories(productsResponse)
      console.log(productsResponse)
    } catch (error) {
        console.error(error);
    }
}


  const selectFilter = (e:any) => { 
    setListFilter(e.target.value);

    console.log("CLICKED BY : ", listFilter)


  }
  
  
 
  useEffect(() => {
    getCategories();
    if (param == undefined || param == null || param.toString() == "" && listFilter.length == 0) {
      setSearch("all")
    } else {
      
      setSearch(filter)
    }
    const getProducts = async () => {
      try {
          const response = await axios.get(`${API_URL}/product`);
        const products = response.data.products;
        console.log("INI PRODUCTTS : " ,products)
      } catch (error) {
          console.error(error);
      }
    }
    getProducts();

  }, [listFilter])
  return (

    <div className=' h-full w-full   bg-white  gap-4 '>
      <Navbar />
      <HeaderProduct pageTitle="ALL PRODUCTS" className='text-primaryBlueNavy flex flex-col font-Bold  w-full pt-4 items-center ' />
      <HeaderCategories title={search} />
      <div className="flex lg:flex-row sm:flex-col flex-col items-centter justify-start align-middle w-full px-6 mt-2 gap-8 border-2">
        <div className="filter text-white bg-redBricks  lg:w-max w-full  md:rounded-xl rounded-full px-4 py-2 gap-2 lg:pt-5 lg:px-10 lg:pb-20 border flex lg:flex-col lg:items-start items-center align-middle justify-center  " >
          
          <h2 className='md:text-2xl text-xl mb-5 font-semibold lg:flex  hidden'>FILTER</h2>
            <div className="  rounded-full md:rounded-none  h-full  filter-item flex lg:flex-col align-middle justify-start  flex-col  items-start  gap-2  lg:overflow-hidden overflow-y-auto lg:w-full w-min  scroll-smooth  ">
            <ul className="items-center w-full text-sm font-medium text-gray-900 pr-4 rounded-lg flex flex-col dark:bg-gray-700 dark:border-gray-600 dark:text-white"  >
                <li className="w-full border-b border-gray-200 flex sm:flex-row lg:flex-col flex-col sm:border-b-0 sm:border-r dark:border-gray-600 gap-2 align-middle  justify-center pr-4 mx-4">
                {categories.map((category, index) => (
                  <div key={index} className="items flex flex-row items-center align-middle justify-center gap-4 sm:text-nowrap lg:text-wrap  ps-4 border border-gray-200 rounded dark:border-gray-700 px-4" onClick={(e) => selectFilter(e)}>
                    <input type="checkbox" id={category.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " value={category.name} />
                    <label htmlFor={category.name} className="md:text-xl text-sm font-istokWeb w-full py-4 ms-2 font-medium text-white dark:text-gray-300">{category.name}</label>
                  </div>
                ))}
                </li>
            </ul>
           
     

          </div>
        </div>

        {/* card Product */}
        <div className="products-container-500 w-full h-full flex gap-4 mb-8 ">
          <div className="text-black border md:w-max w-min flex items-center  flex-col border-black border-opacity-20 hover:shadow-xl text-3xl rounded-2xl transition-transform duration-10 ease-in-out  lg:py-1 py-0 pb-2   " style={{ cursor: "pointer" }} onClick={() => router?.push(`/products/1`)}>
            <div className="product-image border    rounded-xl drop-shadow-2xl border-black border-opacity-20 flex items-center justify-center align-middle w-auto h-max mb-2 scale-75 md:scale-100  ">
              <Image src={'https://i.pinimg.com/564x/ee/62/96/ee62964178d22165482a2c1a0343cb2a.jpg'} className=' rounded-xl w-max  border border-black ' onClick={() => router?.push(`/products/1`)} alt={''} width={150} height={100}></Image>
            </div>
            <div className="metadata md:px-4 px-2 ">
              <div className="desc md:mx-4  ">
                <div className="title font-semibold font-poppins lg:text-2xl text-xl text-primaryBlueNavy">Vitamin B-16</div>
                <div className="title text-xs font-medium text-black text-opacity-30">Generic Product</div>
              </div>
              <div className="price flex justify-between  md:mt-8 mt-4  md:gap-4 gap-2">
                <p className="border  border-primaryBlack md:rounded-xl px-1 md:py-1 py-1 lg:text-xl text-lg text-nowrap font-semibold hover:bg-primaryBlack hover:text-white transition-transform duration-300 ease-in-out hover:scale-105 drop-shadow-2xl md:w-full h-max w-max items-center align-middle  justify-center content-center flex rounded-full" style={{ cursor: "pointer" }} onClick={() => router?.push('/products/1')} >Rp 20.000</p>
                <div className="marketplace">
                  <div className="border border-primaryBlack rounded-xl px-2 py-1 text-2xl font-semibold h-full items-center flex bg-primaryYellow text-white transition-transform duration-300 ease-in-out hover:scale-105 md:scale-100 scale-75drop-shadow-2xl hover:bg-darkYellow " style={{ cursor: "pointer" }}> <IoCart />
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
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetails />
    </Suspense>
  );
}
