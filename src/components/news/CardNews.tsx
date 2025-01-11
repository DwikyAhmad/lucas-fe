import React from 'react'
import { Button } from '../ui/button';

function CardNews() {
  return (
    <div className='basic bg-white md:w-56 w-56 border-black border flex flex-col items-center p-2 rounded-md'>
      <div className='image text-sm '>
        IMAGE HERE
      </div>
      <div className='content text-primaryBlueNavy gap-4 flex flex-col '>
        <div className="title text-primaryBlueNavy font-bold text-xl">
          <h2>10 CABANG TERBARU LUCAS DJAJA</h2>
        </div>
        <div className="teaser text-sm">
          <p>Perusahaan Lucas Djaja Berhasil Membangun 10 Cabang Internasional  Pada Akhir 2024...</p>
        </div>
        <div className='button w-full flex justify-end'>
          <Button className="text-white w-full">Selengkapnya</Button>

        </div>
      </div>
      </div>
  )
}


CardNews.displayName = "CardNews";
export default CardNews;
