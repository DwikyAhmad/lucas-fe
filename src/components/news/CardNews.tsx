'use client';
// import React, { useEffect } from 'react'
import { Button } from '../ui/button';
import News from './News';
import Image from 'next/image';
import bgHero from "@/assets/homepage/bg_hero.svg";



interface CardNewsProps {
  newsItem: News;
}



function CardNews({ newsItem }: CardNewsProps) {

 




  const { title,  urlFile, urlImage,teaser } = newsItem;



  return (
    <div className='basic bg-white md:w-56 w-56 border-black border flex flex-col items-center p-2 rounded-md'>
      <div className='image text-sm '>
      {!urlImage ? (
          <Image className="-z-10 object-fill"
            src={ bgHero}
            alt="Background Hero"
            fill
            style={{ objectFit: "cover" }}
            priority></Image>
        ) : (
          <span>No Image Available</span>
        )}

    
      </div>
      <div className='content text-primaryBlueNavy gap-2 flex flex-col '>
        <div className="title text-primaryBlueNavy font-bold text-xl">
          {/* <h2>Company Profile PT LUCAS DJAJA</h2> */}
          <h2>{title}</h2>
        </div>
        <div className="teaser text-sm mb-4 line-clamp-3">
          {/* <p>PT Lucas Djaja merupakan perusahaan farmasi yang didirikan pada tahun 1968 dan telah menjadi salah satu perusahaan farmasi pertama di Indonesia yang mendapatkan sertifikasi Cara Pembuatan Obat yang Baik (CPOB) pada tahun 1990.</p> */}
          <p>{teaser}</p>
        </div>
        <div className='button w-full flex justify-end'>
          {/* <a href="https://firebasestorage.googleapis.com/v0/b/lucas-djaja-58d33.firebasestorage.app/o/VADEMECUM%20-%20210821%20-%204%20(REVISI_1).pdf?alt=media&token=cd45e0c9-7008-4f2e-9670-0036eff4bf09" target="_blank" className="w-full"><Button className="text-white w-full">Read more</Button></a> */}
          <a href={ urlFile} target="_blank" className="w-full"><Button className="text-white w-full">Read more</Button></a>
        </div>
      </div>
      </div>
  )
}


CardNews.displayName = "CardNews";
export default CardNews;
