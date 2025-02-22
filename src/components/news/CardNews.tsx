"use client";

import { Button } from "../ui/button";
import News from "./News";
import Image from "next/image";
import bgHero from "@/assets/homepage/bg_hero.svg";

interface CardNewsProps {
    newsItem: News;
}

function CardNews({ newsItem }: CardNewsProps) {
    const { title, fileUrl, imageUrl, teaser } = newsItem;
    return (
        <div className="basic bg-white min-w-max border-black border p-4 flex flex-col items-center rounded-2xl font-poppins">
            {!imageUrl ? (
                <Image
                    className="object-cover"
                    src={bgHero}
                    alt="Background Hero"
                    priority
                ></Image>
            ) : (
                <Image
                    className="object-cover rounded-lg"
                    src={imageUrl}
                    width={300}
                    height={200}
                    alt="News Image"
                    priority
                ></Image>
            )}
            <div className="text-primaryBlueNavy gap-2 flex flex-col w-full mt-4">
                <div className="title text-primaryBlueNavy font-bold text-xl">
                    <h2>{title}</h2>
                </div>
                <div className="teaser text-sm mb-4 line-clamp-3">
                    <p>{teaser}</p>
                </div>
                <div className="button w-full flex justify-end">
                    <a href={fileUrl} target="_blank" className="w-full">
                        <Button className="text-white w-full">Read more</Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

CardNews.displayName = "CardNews";
export default CardNews;
