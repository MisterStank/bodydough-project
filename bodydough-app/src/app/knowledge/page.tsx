"use client"
import StarRating from "@/components/StarRating";
import Image from "next/image";
import { useState } from "react";
import getCurrentUserInfo from "../utills/user";
import { useRouter } from "next/navigation";
import Comment from "@/components/Comment";

export default function KnowledgePage(){
    const [rating,setRating] = useState<number>(0);
    const [comment,setComment] = useState<string>("");
    const router = useRouter();

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const handleCommentChange = (newComment : string) =>{
        setComment(newComment);
    };

    const fetchData = async() =>{
        try {
            const userinfo = getCurrentUserInfo();
            await fetch("/api/rate/knowledge", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name : userinfo.name,
                knowledge : rating,
                comment : comment
              }),
            });
            // keep user data at the localstorage
            await localStorage.removeItem("userinfos")
            router.push("/ending");
          } catch (error) {
            console.error(error);
          }
    };
    return(
        <div className='w-screen h-screen flex divide-x items-center justify-center h-screen'>
            <Image
                src={'/Infopage.jpg'}
                alt='cover'
                fill={true}
                objectFit='cover'
            />
            <div className='w-60% mg-4 pd-20 relative flex flex-col font-sriracha items-center justify-center rounded-lg '>
                <p className='md:text-xl lg:text-3xl xl:text-4xl mb-5 mt-5'>ความรู้เรื่องอ้วนลงพุงจากใช้การเว็บไซต์</p>
                    <StarRating 
                    totalStars={5} 
                    starSize="text-4xl"
                    onRatingChange={handleRatingChange}
                    />
                    <p className='md:text-base lg:text-xl xl:text-2xl mb-5 mt-5'>ข้อเสนอเเนะ (ถ้ามี) </p>
                    <Comment
                    onCommentChange={handleCommentChange}
                    />
                    <p className='md:text-m lg:text-xl xl:text-2xl mb-2 mt-5'>Knowledge Score : {rating}</p>
                    <button className='bg-yellow-500 text-black border-4 border-black 
                    font-medium text-xl font-prompt py-2 px-10 rounded-full  hover:bg-white
                    hover:text-yellow-600 hover:border-yellow-600 mb-5 mt-5' onClick={fetchData}>
                        SUBMIT
                    </button >
            </div>
        </div>
    );
}