"use client"
import StarRating from "@/components/StarRating";
import Image from "next/image";
import { useState } from "react";
import getCurrentUserInfo from "../utills/user";
import { useRouter } from "next/navigation";


export default function RatingPage(){
    const [rating,setRating] = useState<number>(0);

    const router = useRouter();

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };
    const fetchData = async() =>{
        try {
            const userinfo = getCurrentUserInfo();
            console.log("userinfo ",userinfo);
            await fetch("/api/rate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name : userinfo.name,
                rating : rating
              }),
            });
            // keep user data at the localstorage
            router.push("/comment");
          } catch (error) {
            console.error(error);
          }
    };
    return(
        <div className='w-screen h-screen flex divide-x items-center justify-center'>
            <Image
                src={'/Infopage.jpg'}
                alt='cover'
                fill={true}
                objectFit='cover'
            />
            <div className='w-60% m-5 text-center relative flex flex-col font-sriracha items-center justify-center rounded-lg '>
                <p className='md:text-xl lg:text-3xl xl:text-4xl mb-5 mt-5'>ความพึงพอใจในการใช้เว็บไซต์</p>
                    <StarRating 
                    totalStars={5} 
                    starSize="text-4xl"
                    onRatingChange={handleRatingChange}
                    />
                    <p className='md:text-m lg:text-xl xl:text-2xl mb-2 mt-5'>Rating Score : {rating}</p>
                    <button className='bg-yellow-500 text-black border-4 border-black 
                    font-medium text-xl font-prompt py-2 px-10 rounded-full  hover:bg-white
                    hover:text-yellow-600 hover:border-yellow-600 mb-5 mt-5' onClick={fetchData}>
                        NEXT
                    </button >
            </div>
        </div>
    );
}