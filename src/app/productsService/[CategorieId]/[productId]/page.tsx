'use client';

import Navbar from '@/components/navbar'
import React from 'react'
import Image from 'next/image';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import shopee from "@/assets/marketplace/shopee.svg";
import tokopedia from "@/assets/marketplace/tokopedia.svg";



import Footer from '@/components/footer';

type detailProps = {param?:{productId:string}}
const ProductDetail = (props: detailProps) => {
    
    const {productId} = props.param || { productId: "Unknown Product Id" }
  
    return (
        <div className="bg-primaryBlueNavy w-full">
            <Navbar />
            <div className="flex items-center justify-center gap-36 align-middle  h-full px-10 py-8 bg-white mt-8 mx-4 rounded-xl border border-black">
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
                                <div className="display-number w-24 text-center text-md mx-2 rounded-sm h-auto text-primaryBlack text-bold font-poppins" >0</div>
                                <button className="dec bg-primaryBlueNavy w-5 h-5 text-xl font-bold justify-center align-middle flex items-center p-3 rounded-sm font-istokWeb">-</button>
                            </div>
                        </div>
                    </div>
                </div>



                
                <div className="rightSide text-black">
                    <div className="product-name border border-red-500">
                        <h1 className='text-poppins text-6xl font-bold'>Vitamin C Putih 50 mg</h1>
                        <div className="type">Tablet</div>
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

                    <div className="font-poppins text-md justify-end  border   flex mt-8">Available on</div>
                    <div className="ctas flex justify-between ">
                        <div className="cart-check border border-black flex gap-4">
                            <button className="cart  border-black px-6 py-3 rounded-lg border-2 hover:bg-primaryYellow "><ShoppingCartTwoToneIcon className='scale-150'/></button>
                            <div className="cart border border-black bg-primaryYellow font-josefinSans text-3xl px-8 py-3 justify-center align-middle flex items-center rounded-lg font-bold">CHECKOUT</div>
                        </div>
                        <div className="marketplace border border-black flex border-y-primaryBlack rounded-lg">
                            <button className="tokped text-black border  flex items-center px-2   "><Image src={ tokopedia} alt={''} width={100} height={100}></Image></button>
                        </div>
                    </div>
                </div>
            </div>






           
            <Footer />

        
            
            
            
            
        </div>
    )
}

export default ProductDetail
