"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import jne from "@/assets/kurir/jne.svg";


const Summary = () => {
  const [isChecked, setIsChecked] = useState(false);


  return (
    <div className='bg-primaryBlueNavy h-full w-full py-4 text-primaryBlack px-10'>
      <div className="summary-title font-poppins font-bold  border border-red-500 w-full flex items-center justify-center text-6xl pt-2 mb-4 text-white  ">SUMMARY ORDER</div>
      <div className="content border border-white flex justify-between">
        <div className="left-content items-detail border border-white w-min">
          <div className="cartCard bg-white flex m-2 p-2 rounded-xl w-max   ">
            <div className="logo">
              <Image src={'https://i.pinimg.com/564x/e8/31/c7/e831c790b3967da32b69a423327c2aa5.jpg'} alt={'ProductLogo'} width={200} height={200} className='border   border-black rounded-xl'></Image>
            </div>
            <div className="detail-text flex flex-col justify-around px-4">
              <div className="title text-primaryBlack font-poppins font-semibold  ">
                <h1 className='text-2xl'>Paracetamol 5Kg</h1>
                <p className='font-josefinSans font-light'>Generic Product</p>
              </div>
              <div className="qty-price flex   justify-between medium gap-x-14">
                <div className="qty flex gap-2">
                  <p className='font-poppins text-xl'>Qty</p>
                  <div className="value border border-black w-10 justify-center aling-middle text-center rounded-lg text-xl font-semibold">2</div>
                </div>
                <div className="price">
                  <h1 className='text-2xl  font-semibold'>Rp 20.000</h1>
                </div>
              </div>
            
            </div>
            <div className="delete-logo hover:bg-primaryRed bg-red-700 flex align-middle justify-center items-center p-2 rounded-r-md">
                <DeleteSharpIcon className='scale-110' />
            </div>

          </div>
        </div>
        <div className="right-content courier-address rounded-2xl border  w-fit">
          <div className="courier bg-white rounded-2xl ">
            <div className="title font-poppins text-2xl roudned justify-center p-4 items-center align-middle flex bg-white text-primaryBlueNavy  font-semibold border-b-2 border-primaryBlueNavy">COURIER</div>
            <div className="listCouries p-2 gap-2 flex flex-col items-center">

              <div className="flex  flex-row gap-4 border border-black p-2 rounded-xl hover:bg-gray-200  " style={{cursor: 'pointer'}} onClick={() => {setIsChecked(!isChecked)}} >
                <label className="value peer-checked:font-bold " htmlFor="kurir" >
                  <div className="logo" id="kurir">
                    <Image src={jne} alt={''} width={100} height={100} className='p-2'></Image>
                  </div>
                </label>
                  <div className="desc flex flex-col align-middle justify-center">
                    <div className="title font-josefinSans font-semibold text-4xl ">JNE - Reguler</div>
                    <div className="ket font-poppins text-gray-400 font-thin">Pesanan akan sampai pada 12-15 Oktober 2024</div>
                  </div>
                  <div className="price font-poppins font-thin text-lg ">Rp 28.000</div>
                <input type="checkbox" className='w-8 rounded-full' id='kurir' checked={isChecked}/>
              </div>
              <div className="button bg-green-700 rounded-2xl mt-4 p-2 flex items-center justify-center w-[80%]"><button className='font-poppins font-semibold text-2xl text-white'>Save</button></div>
              </div>
            </div>
          <div className="address"></div>
        </div>
        
      </div>
      <div className="transaction-summary">
        <div className="title"></div>
        <div className="summary-content"></div>
        <div className="caution"></div>
        <div className="button"></div>
      </div>
    </div>
  )
}

export default Summary
