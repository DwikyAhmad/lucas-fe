"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import jne from "@/assets/kurir/jne.svg";
import Navbar from '@/components/Navbar';


const Summary = () => {
  const [isChecked, setIsChecked] = useState(false);


  return (
    <div className='bg-primaryBlueNavy h-full w-full py-4 text-primaryBlack px-10 '>
      <Navbar />
      <div className="summary-title font-poppins font-bold w-full flex  flex-row items-center justify-center xl:text-6xl text-2xl pt-2 mb-4 text-white  ">SUMMARY ORDER</div>
      <div className="content  flex justify-between gap-2 md:flex-row flex-col items-center md:items-start">
        <div className="left-content items-detail  w-min">
          <div className="cartCard bg-white flex mt-2 p-2 rounded-xl w-full sm:w-full md:p-0 px-2 border border-red-600  ">
            <div className="logo w-max">
              <Image src={'https://i.pinimg.com/564x/e8/31/c7/e831c790b3967da32b69a423327c2aa5.jpg'} alt={'ProductLogo'} width={100} height={100} className='border   border-black rounded-xl'></Image>
            </div>
            <div className="detail-text flex flex-col justify-around px-4 ">
              <div className="title text-primaryBlack font-poppins font-semibold  ">
                <h1 className='md:text-2xl text-lg'>Paracetamol 5Kg</h1>
                <p className='font-josefinSans font-light'>Generic Product</p>
              </div>
              <div className="qty-price flex   justify-between medium md:gap-x-14 gap-x-10">
                <div className="qty flex w-max flex-rowgap-0 md:gap-2">
                  <p className='font-poppins text-xl'>Qty :</p>
                  <div className="value  w-10 justify-center aling-middle text-center rounded-lg text-xl font-semibold">2</div>
                </div>
                <div className="price ">
                  <h1 className='md:text-2xl  font-semibold text-nowrap text-lg'>Rp 20.000</h1>
                </div>
              </div>
            
            </div>
            <div className="delete-logo hover:bg-primaryRed bg-red-700 flex align-middle justify-center items-center p-2 rounded-r-md">
                <DeleteSharpIcon className='scale-110' />
            </div>

          </div>
        </div>
        <div className="right-content courier-address rounded-2xl w-fit">
          <div className="courier bg-white rounded-2xl mt-2">
            <div className="title font-poppins text-2xl rounded-t-xl justify-center p-4 items-center align-middle flex bg-white text-primaryBlueNavy  font-medium border-b-2 border-primaryBlueNavy">COURIER</div>
            <div className="listCouries p-2 gap-2 flex flex-col items-center">

              <div className="flex  flex-row gap-4 border border-black p-2 rounded-xl hover:bg-gray-200  " style={{cursor: 'pointer'}} onClick={() => {setIsChecked(!isChecked)}} >
                <label className="value peer-checked:font-bold " htmlFor="kurir" >
                  <div className="logo" id="kurir">
                    <Image src={jne} alt={''} width={80} height={80} className='p-2'></Image>
                  </div>
                </label>
                  <div className="desc flex flex-col align-middle justify-center">
                    <div className="title font-josefinSans font-semibold xl:text-2xl md:text-lg ">JNE - Reguler</div>
                    <div className="ket font-poppins text-gray-400 font-thin xl:text-lg text-sm">Pesanan akan sampai pada 12-15 Oktober 2024</div>
                  </div>
                  <div className="price font-poppins font-thin text-lg md:text-lg text-primaryBlueNavy  h-min w-max whitespace-nowrap ">Rp 28.000</div>
                <input type="checkbox" className='w-8 rounded-full' id='kurir' checked={isChecked}/>
              </div>
              <div className="button bg-green-700 hover:bg-green-600 rounded-2xl mt-4 p-2 flex items-center justify-center w-[80%] shadow-xl "><button className='font-poppins font-semibold text-2xl text-white shadow-xl'>Save</button></div>
              </div>
            </div>
            <div className="address  font-medium font-poppins bg-white rounded-xl mt-2 px-8 py-2 flex   flex-col items-center align-middle justify-center">
            <div className="title uppercase text-2xl font-medium mb-4 border border-b-primaryBlueNavy w-full items-center text-center">Address</div>
            <div className="address-item font-bold text-xl font-poppins">Jalan Kenanga 13 No.2 Depok, Jawa Barat</div>
            <div className="changeAddress border w-full flex justify-end ">
              <button className='hover:bg-lightGreen bg-lightGreenDark rounded-xl text-white text-md font-bold  mt-4 px-4 py-2 flex items-center justify-center '>Change Address</button>
            </div>

          </div>
        </div>
        
      </div>
      <div className="flex flex-col w-full  items-start transaction-summary bg-white  rounded-lg py-2 px-4 mb-4 mt-8">
        <div className="title  w-full items-center align-middle text-center text-3xl font-poppins font-semibold mb-4">CHECKOUT</div>
        <div className="summary-content w-full p-2 mb-4">
          <div className="item-price font-poppins  flex border-b-2 border-gray-300 w-full flex-row gap-4 justify-between">
            <div  className="text-xl font-poppins">15 X Paracetamol</div>
            <div className="price-item text-xl font-poppins">Rp 15.000 </div>
          </div>
          <div className="subtotal  flex border-b-2 border-primaryBlack w-full flex-row gap-4 justify-between mb-4">
            <div  className="text-xl font-bold font-poppins uppercase">Subtotal</div>
            <div className="price-item text-xl font-bold font-poppins">Rp 15.000 </div>
          </div>
          <div className="tax font-poppins  flex border-b-2 border-gray-300 w-full flex-row gap-4 justify-between">
            <div  className="text-xl font-poppins">15 X Paracetamol</div>
            <div className="price-item text-xl font-poppins">Rp 15.000 </div>
          </div>
          <div className="total   flex border-b-2 border-primaryBlack w-full flex-row  justify-between mb-4">
            <div  className="text-xl font-bold font-poppins uppercase">total</div>
            <div className="price-item text-xl font-bold font-poppins">Rp 15.000 </div>
          </div>
        </div> 
        <div className="caution px-2 py-2 w-full flex md:text-lg text-sm"><p className='text-primaryRed'>*</p>Metode pembayaran dapat dipilih setelah anda menekan tombol PAYMENT</div>
        <div className="button w-full flex items-center align-middle justify-center my-2">
          <button className='w-[80%] hover:bg-primaryYellow bg-yellow-500 border border-primaryBlack px-4 py-2 rounded-lg font-bold text-xl drop-shadow-2xl'>PAYMENT</button>
        </div>
      </div>
    </div>
  )
}

export default Summary
