'use client';

import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import shopee from "@/assets/marketplace/shopee.svg";
import tokopedia from "@/assets/marketplace/tokopedia.svg";
import { useRouter } from 'next/navigation';





import Footer from '@/components/footer';

interface detailProps {params:{productId:string}}
const ProductDetail = (props: detailProps) => {

    const router = useRouter()
    const {productId} = props.params || { productId: "Unknown Product Id" }
  
    return (
        <div className="bg-primaryBlueNavy w-full  ">
            <Navbar />
            <div className="w-full contentm  flex items-center flex-col h-full ">

                <div className="flex items-center justify-center xl:gap-36 align-middle h-full md:px-10  md:py-8 py-2 px-4 md:w-max lg:w-[80%]  w-full bg-white mt-8 mx-4 rounded-xl my-8 md:flex-col lg:flex-row flex-col sm:w-min gap-8  ">
                    <div className="leftSide  flex sm:flex-row md:justify-start md:items-start items-center gap-4 sm:items-center w-fit  md:flex-col m-4 flex-col">
                        <div className="product-image ml-4 flex items-center justify-center md:w-fit w-20 ">
                            <Image src={'https://i.pinimg.com/564x/d3/d7/c3/d3d7c3ff6bda3ac7a2d27537658300b6.jpg'} alt={`Product Image id-${productId}`} width={400} height={400} className='md:rounded-xl rounded-sm h-full w-full md:w-max md:h-max  '></Image>
                        </div>
                        <div className="variants  ">
                            <div className="label text-white bg-orange rounded-full align-semibold items-center flex justify-center w-max px-3 py-1 text-md font-medium " >Variants</div>
                            <div className="variants-item  flex  gap-4 pl-4 lg:flex-col md:flex-col xl:flex-row flex-row sm:flex-row md:gap-2 ">
                                <div className="item-name text-primaryBlack flex md:flex-row lg:w-max w-fit  flex-col text-wrap md:flex-wrap" >
                                    
                                    <input type="checkbox" id="variantA" className="w-3 h-3 m-2 peer" />
                                    <label htmlFor="variantA"  className="text-md font-istokWeb peer-checked:font-bold text-wrap text-sm ">Rp 20.000 (Variant A)</label>
                                </div>
                                <div className="flex justify-between align-middle items-center counter  ">
                                    <button className="inc bg-primaryBlueNavy w-5 h-5 text-xl font-bold justify-center align-middle flex items-center p-3 rounded-sm font-istokWeb">+</button>
                                    <div className="display-number md:w-24  w-min p-2 text-center text-md mx-2 rounded-sm h-auto text-primaryBlack text-bold font-poppins md:p-0 " >0</div>
                                    <button className="dec bg-primaryBlueNavy w-5 h-5 text-xl font-bold justify-center align-middle flex items-center p-3 rounded-sm font-istokWeb ">-</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    
                    <div className="rightSide text-black flex flex-col w-full  ">
                        <div className="product-name ">
                            <h1 className='text-poppins xl:text-5xl md:text-4xl text-2xl font-bold'>Vitamin C Putih 50 mg</h1>
                            <div className="type text-sm font-light font-poppins">Tablet</div>
                        </div>
                        <div className="breaks w-full h-1 bg-black mb-4"></div>

                        <div className="details p-4 sm:p-2 flex md:gap-10 sm:gap-4 sm:flex-col flex-col md:flex-row justify-between align-middle">
                            <div className="left flex flex-col gap-4 align-middle justify-between">
                                <div className="compotition">
                                    <label htmlFor="" className='font-bold md:text-3xl text-lg  font-poppins mb-4 '>Compotition</label>
                                    <div className=" text-md w-full font-light p-2 text-sm md:text-xl font-josefinSans">
                                        <p className='text-nowrap sm:text-wrap'> Vitamin C Putih 50 mg</p>
                                        <p>Vitamin C Putih 50 mg</p>
                                        <p>Vitamin C Putih 50 mg</p>
                                        <p>Vitamin C Putih 50 mg</p>
                                    </div>
                                </div>
                                <div className="packaging ">
                                    <label htmlFor="" className='font-bold md:text-3xl text-lg font-poppins mb-4 '>Compotition</label>
                                    <div className=" text-md font-light p-2 text-sm md:text-xl font-josefinSans">
                                        <p>10 Strip @10 Tablet</p>
                                    </div>
                                </div>
                            </div>

                            <div className="right  flex flex-col gap-4 align-middle justify-between  ">
                                <div className="produceBy w-full  ">
                                    <label htmlFor="" className='font-bold md:text-3xl text-lg font-poppins mb-4 '>Produce By</label>
                                    <div className=" text-md font-light p-2 text-sm md:text-xl sm:text-sm font-josefinSans">
                                        <p>PT MARLIN LIZA</p>
                                    </div>
                                </div>
                                <div className="category  w-min ">
                                <label htmlFor="" className='font-bold md:text-3xl text-lg font-poppins mb-4 '>Categories</label>
                                    <div className=" text-md font-light p-2 text-sm md:text-xl font-josefinSans">
                                        <p>Vitamin & suplemen kesehatan</p>
                                    </div>
                                </div>
                            </div>

                        </div>  

                        <div className="font-poppins text-md justify-end     flex mt-8">Available on</div>
                        <div className="ctas flex justify-between w-full ">
                            <div className="cart-check     flex gap-2 md:gap-4 md:w-full  w-full mr-3  ">
                                <button className="cart     md:px-6 md:py-3 p-2 rounded-lg  hover:bg-primaryYellow border border-black  transition-all duration-300 hover:scale-105"><ShoppingCartTwoToneIcon className='md:scale-150 sm:scale-100 scale-90'/></button>
                                <button className="cart  bg-primaryYellow font-josefinSans md:text-3xl  border  sm:w-min text-sm  md:w-full w-full border-black md:px-10 md:py-3 justify-center align-middle flex items-center rounded-lg font-bold hover:scale-101 hover:bg-yellow-500 transition-all duration-100 hover:scale-105 sm:text-sm " onClick={()=>router.push("/products/1/checkout")}  >CHECKOUT</button>
                            </div>
                            <div className="marketplace  flex rounded-lg gap-2 w-max ">
                                <button className="tokped text-black border  border-black flex items-center px-2  rounded-lg hover:bg-gray-200 hover:scale-105 "><Image src={ tokopedia} alt={''} width={100} height={100} ></Image></button>
                                <button className="tokped text-black border border-black  flex items-center px-2 rounded-lg h-full  py-2 hover:bg-gray-200 hover:scale-105 "><Image src={ shopee} alt={''} width={40} height={20} className='  scale-75 '></Image></button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
          






           
            <Footer />

        
            
            
            
            
        </div>
    )
}

export default ProductDetail
