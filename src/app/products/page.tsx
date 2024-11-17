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
import API_URL, { formatRupiah } from '@/utils/utils';
import axios from 'axios';
import CardFilter from '@/components/ui/productService/cardFilter';


// type detailProductTypeProps ={ params: { filter: string } }

interface   Category {
  id: string;
  name: string;
  description: string;
  // add other fields here if there are any, like `description`, `imageUrl`, etc.
}
interface   Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  type: string;
  composition: string[];
  image: string;
  categoryName: string[]
}
const Products =  () => {
  const router = useRouter()
  const param = useSearchParams()
  const filter = (param.get("filter")) || ""
  const [search, setSearch] = useState("")
  const [categories,setCategories] = useState<Category[]>([]);
  const [listProduct,setListProduct] = useState<Product[]>([]);
  const [listFilter, setListFilter] = useState<string[]>([]);




  const getCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/category`);
      const productsResponse = response.data.categories
      setCategories(productsResponse)
    } catch (error) {
        console.error(error);
    }
}


  const selectFilter = (value:string) => { 
    setListFilter((prev)=>prev.includes(value)?prev:[...listFilter,value])
  }

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
  };

  
 
  useEffect(() => {
    getCategories();
    if (param == undefined || param == null || param.toString() == "" && listFilter.length == 0) {
      setSearch("all")
    } else if (param != undefined || param != null || param != "" ) {
      setListFilter([...listFilter, filter])
    }
    const getProducts = async () => {
      try {
          const response = await axios.get(`${API_URL}/product`);
        const products = response.data.products;
        setListProduct((prevListProduct) => [...prevListProduct, ...products])
      } catch (error) {
          console.error(error);
      }
    }
    getProducts();
    getCategories()

  }, [search])
  return (

   
    <div className=' h-full w-full   bg-white  gap-4 '>
      <Navbar />

      <HeaderProduct pageTitle="ALL PRODUCTS" className='text-primaryBlueNavy flex flex-col   w-full pt-4 items-center ' search={search} onSearch={handleSearch }  />
      <div className="flex lg:flex-row sm:flex-col flex-col items-centter justify-start align-middle w-full px-6 mt-2 gap-8 border-2 border-black">

        <div className="filter text-white bg-redBricks h-full lg:w-max w-full lg:rounded-xl rounded-full px-4 py-2 gap-2 lg:pt-5 lg:px-10 lg:pb-20 border flex lg:flex-col lg:items-start items-center align-middle justify-center "  >
        <h2 className='md:text-2xl text-xl mb-5 font-semibold lg:flex  hidden'>FILTER</h2>
          {categories.map((category,index) => (
            <CardFilter  key= {index} name={category.name} isChecked={false}  value={category.name} onFilterClick={(value)=>selectFilter(value)}/>
          ))}
      </div>
      <div className='w-full flex flex-col items-center align-top justify-start border'>
              {listFilter.map((filter,index) => (
                <div key={index} className='w-full h-full flex flex-col'> 
                <HeaderCategories title={filter} />
                  <div className='w-full  flex-wrap  flex flex-row items-center align-top justify-start  '>
                    {listProduct
                      .filter((product) => (product?.categoryName && product.categoryName.includes(filter))  ) // next handle by name (search)
                      .map((product,index) => (
                        product ? (
                          <div className=" w-min h-max flex flex-col gap-4 mb-8  m-2  " key={index}>
                            <div className="text-black border md:w-max w-min flex items-center  flex-col border-black border-opacity-20 hover:shadow-xl text-3xl rounded-2xl transition-transform duration-10 ease-in-out  lg:py-1 py-0 pb-2   " style={{ cursor: "pointer" }} onClick={() => router?.push(`/products/${product.id}`)}>
                              <div className="product-image border    rounded-xl drop-shadow-2xl border-black border-opacity-20 flex items-center justify-center align-middle w-auto h-max mb-2 scale-75 md:scale-100  ">
                                <Image src={'https://i.pinimg.com/564x/ee/62/96/ee62964178d22165482a2c1a0343cb2a.jpg'} className=' rounded-xl w-max  border border-black ' onClick={() => router?.push(`/products/${product.id}`)} alt={''} width={150} height={100}></Image>
                              </div>
                                <div className="metadata md:px-4 px-2 ">
                                  <div className="desc md:mx-4  ">
                                        <div className="title font-semibold font-poppins lg:text-2xl text-xl text-primaryBlueNavy">{product.name}</div>
                                        <div className="title text-xs font-medium text-black text-opacity-30">{ product.type}</div>
                                  </div>
                                  <div className="price flex justify-between  md:mt-8 mt-4  md:gap-4 gap-2">
                                        <p className="border  border-primaryBlack md:rounded-xl px-1 md:py-1 py-1 lg:text-xl text-lg text-nowrap font-semibold hover:bg-primaryBlack hover:text-white transition-transform duration-300 ease-in-out hover:scale-105 drop-shadow-2xl md:w-full h-max w-full items-center align-middle  justify-center content-center flex rounded-full" style={{ cursor: "pointer" }} onClick={() => router?.push('/products/1')} >{ formatRupiah(product.price)}</p>
                                    <div className="marketplace">
                                      <div className="border border-primaryBlack rounded-xl px-2 py-1 text-2xl font-semibold h-full items-center flex bg-primaryYellow text-white transition-transform duration-300 ease-in-out hover:scale-105 md:scale-100 scale-75drop-shadow-2xl hover:bg-darkYellow " style={{ cursor: "pointer" }}> <IoCart />
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                          </div>) : (
                            <h2 key={index} className='text-2xl text-primaryBlueNavy font-semibold'>Product out of stock</h2>
                        )
                        
                      ))}
                  </div>
                  </div>
              ))}
       
        




      </div>
          


      </div>
      <Footer />
    </div>



  )
}
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  );
}
