'use client';

import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import shopee from "@/assets/marketplace/shopee.svg";
import tokopedia from "@/assets/marketplace/tokopedia.svg";
import { useRouter } from 'next/navigation';





import Footer from '@/components/footer';

type detailProps = {param?:{productId:string}}
const ProductDetail = (props: detailProps) => {

    const router = useRouter()

    const {productId} = props.param ?? { productId: "Unknown Product Id" }
  
    return (
        <div className="bg-primaryBlueNavy w-full  ">
            <Navbar />
            <div className="contentm  flex items-center flex-col h-full">

                <div className="flex items-center justify-center gap-36 align-middle  h-full px-10 py-8 w-[80%] bg-white mt-8 mx-4 rounded-xl my-8">
                    <div className="leftSide  flex flex-col justify-start items-start gap-4  ">
                        <div className="product-image ml-4">
                            <Image src={'https://i.pinimg.com/564x/d3/d7/c3/d3d7c3ff6bda3ac7a2d27537658300b6.jpg'} alt={`Product Image id-${productId}`} width={400} height={400} className='rounded-xl'></Image>
                        </div>
                        <div className="variants">
                            <div className="label text-white bg-orange rounded-full align-semibold items-center flex justify-center w-max px-3 py-1 text-md font-medium">Variants</div>
                            <div className="variants-item  flex  gap-4 pl-4">
                                <div className="item-name text-primaryBlack ">
                                    
                                    <input type="checkbox" id="variantA" className="w-3 h-3 m-2 peer" />
                                    <label htmlFor="variantA"  className="text-md font-istokWeb peer-checked:font-bold ">Rp 20.000 (Variant A)</label>
                                </div>
                                <div className="flex justify-between align-middle items-center counter  ">
                                    <button className="inc bg-primaryBlueNavy w-5 h-5 text-xl font-bold justify-center align-middle flex items-center p-3 rounded-sm font-istokWeb">+</button>
                                    <div className="display-number w-24 text-center text-md mx-2 rounded-sm h-auto text-primaryBlack text-bold font-poppins border border-black" >0</div>
                                    <button className="dec bg-primaryBlueNavy w-5 h-5 text-xl font-bold justify-center align-middle flex items-center p-3 rounded-sm font-istokWeb ">-</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    
                    <div className="rightSide text-black ">
                        <div className="product-name ">
                            <h1 className='text-poppins text-6xl font-bold'>Vitamin C Putih 50 mg</h1>
                            <div className="type text-sm font-light font-poppins">Tablet</div>
                        </div>
                        <div className="breaks w-full h-1 bg-black mb-4"></div>

                        <div className="details p-4 flex gap-10 justify-between align-middle">
                            <div className="left flex flex-col gap-4 align-middle justify-between">
                                <div className="compotition">
                                    <label htmlFor="" className='font-medium text-3xl font-poppins mb-4 '>Compotition</label>
                                    <div className=" text-md font-light p-2 text-xl font-josefinSans">
                                        <p>Vitamin C Putih 50 mg</p>
                                        <p>Vitamin C Putih 50 mg</p>
                                        <p>Vitamin C Putih 50 mg</p>
                                        <p>Vitamin C Putih 50 mg</p>
                                    </div>
                                </div>
                                <div className="packaging">
                                    <label htmlFor="" className='font-medium text-3xl font-poppins mb-4 '>Compotition</label>
                                    <div className=" text-md font-light p-2 text-xl font-josefinSans">
                                        <p>10 Strip @10 Tablet</p>
                                    </div>
                                </div>
                            </div>

                            <div className="right  flex flex-col gap-4 align-middle justify-between">
                                <div className="produceBy">
                                    <label htmlFor="" className='font-medium text-3xl font-poppins mb-4 '>Produce By</label>
                                    <div className=" text-md font-light p-2 text-xl font-josefinSans">
                                        <p>PT MARLIN LIZA</p>
                                    </div>
                                </div>
                                <div className="category">
                                <label htmlFor="" className='font-medium text-3xl font-poppins mb-4 '>Categorie</label>
                                    <div className=" text-md font-light p-2 text-xl font-josefinSans">
                                        <p>Vitamin & suplemen kesehatan</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="font-poppins text-md justify-end     flex mt-8">Available on</div>
                        <div className="ctas flex justify-between w-full">
                            <div className="cart-check    flex gap-4 w-full mr-3">
                                <button className="cart   px-6 py-3 rounded-lg  hover:bg-primaryYellow border border-black  transition-all duration-300 hover:scale-105"><ShoppingCartTwoToneIcon className='scale-150'/></button>
                                <button className="cart  bg-primaryYellow font-josefinSans text-3xl w-full border border-black px-10 py-3 justify-center align-middle flex items-center rounded-lg font-bold hover:scale-101 hover:bg-yellow-500 transition-all duration-100 hover:scale-105" onClick={()=>router.push("/productsService/1/1/checkout")}  >CHECKOUT</button>
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
