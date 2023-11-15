"use client"
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import { useState,useEffect } from "react";
import { LinearProgress } from "@mui/material";

export default function Page({ params }: { params: { id: number } } ) {
   const searchParams = useSearchParams()
   const id = params.id;
   const imageIDs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,7,8,9,7,8,9,16,17,18,16,17,18];
   const bmi = searchParams.get('bmi');
   const resultFromBmi = [
    "อยู่ในเกณฑ์ BMI ต่ำ (< 18.50)",
    "อยู่ในเกณฑ์ BMI ต่ำ (< 18.50)",
    "อยู่ในเกณฑ์ BMI ต่ำ (< 18.50)",
    "อยู่ในเกณฑ์ BMI ปกติ (18.50-22.90)",
    "อยู่ในเกณฑ์ BMI ปกติ (18.50-22.90)",
    "อยู่ในเกณฑ์ BMI ปกติ (18.50-22.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 1 (23.00-24.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 1 (23.00-24.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 1 (23.00-24.90)",
    "อยู่ในเกณฑ์ BMI ต่ำ (< 18.50)",
    "อยู่ในเกณฑ์ BMI ต่ำ (< 18.50)",
    "อยู่ในเกณฑ์ BMI ต่ำ (< 18.50)",
    "อยู่ในเกณฑ์ BMI ปกติ (18.50-22.90)",
    "อยู่ในเกณฑ์ BMI ปกติ (18.50-22.90)",
    "อยู่ในเกณฑ์ BMI ปกติ (18.50-22.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 1 (23.00-24.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 1 (23.00-24.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 1 (23.00-24.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 2 (25.00-29.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 2 (25.00-29.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 2 (25.00-29.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 3 (> 30.00)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 3 (> 30.00)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 3 (> 30.00)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 2 (25.00-29.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 2 (25.00-29.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 2 (25.00-29.90)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 3 (> 30.00)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 3 (> 30.00)",
    "อยู่ในเกณฑ์ BMI เกิน ระดับ 3 (> 30.00)",
   ];

   const resultFromWhr = [
    "ไม่มีภาวะอ้วนลงพุง",
    "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ไม่มีภาวะอ้วนลงพุง",
    "ไม่มีภาวะอ้วนลงพุง",
    "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ไม่มีภาวะอ้วนลงพุง",
    "ไม่มีภาวะอ้วนลงพุง",
    "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ไม่มีภาวะอ้วนลงพุง",
    "ไม่มีภาวะอ้วนลงพุง",
    "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ไม่มีภาวะอ้วนลงพุง",
    "ไม่มีภาวะอ้วนลงพุง",
    "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ไม่มีภาวะอ้วนลงพุง",
    "ไม่มีภาวะอ้วนลงพุง",
    "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ไม่มีภาวะอ้วนลงพุง",
    "ไม่มีภาวะอ้วนลงพุง",
    "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ไม่มีภาวะอ้วนลงพุง",
    "ไม่มีภาวะอ้วนลงพุง",
    "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ไม่มีภาวะอ้วนลงพุง",
    "ไม่มีภาวะอ้วนลงพุง",
    "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ไม่มีภาวะอ้วนลงพุง",
    "ไม่มีภาวะอ้วนลงพุง",
    "มีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ไม่มีภาวะอ้วนลงพุง",
   ];

   const finalResult = [
    "อยู่ในเกณฑ์ต่ำ",
    "อยู่ในเกณฑ์ต่ำ",
    "อยู่ในเกณฑ์ต่ำ",
    "อยู่ในเกณฑ์ปกติ",
    "อยู่ในเกณฑ์ปกติ",
    "อยู่ในเกณฑ์ปกติ",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์ต่ำ",
    "อยู่ในเกณฑ์ต่ำ",
    "อยู่ในเกณฑ์ต่ำ",
    "อยู่ในเกณฑ์ปกติ",
    "อยู่ในเกณฑ์ปกติ",
    "อยู่ในเกณฑ์ปกติ",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
    "อยู่ในเกณฑ์เกิน",
   ];
   const [loading, setLoading] = useState(true);
   useEffect(() => {
    // Simulate a delay to fetch data (you can replace this with actual data fetching logic)
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second delay
      setLoading(false); // Set loading to false once data is ready
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      {loading ? (
        // Render loading screen while data is being fetched
        <div className="loading-screen">
          <h1 className="m-5 font-sriracha text-3xl">Loading your result...</h1>
          <LinearProgress color="inherit"/>
        </div>
      ) : (
        // Render the actual content once data is ready
        <div className='flex flex-col items-center h-5/6'>
          <Image src={'/bgresult.png'} alt='cover' fill={true} objectFit='cover' loading="eager"/>
          <div className='my-5 mx-10 grid grid-cols-1 sm:grid-cols-2 gap-1 z-50 overflow-y-auto overflow-x-hidden scroll-smooth
            scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar- scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
            <div className="flex-none w-full h-[300px] sm:h-[500px] relative">
              <Image src={`/images/result/${imageIDs[id - 1]}.png`} alt='card' fill={true} className='object-contain rounded-lg' loading="lazy" />
            </div>
            <div className="m-5 flex w-[90%] sm:w-[80%] max-h-[400px] sm:max-h-[600px] relative flex-col item-center">
              <div className='p-5 w-[100%] max-h-[400px] sm:max-h-[600px] text-[min(4vw,1.5rem)] text-gray-700 rounded-lg 
                  flex font-ktd bg-white shadow-md z-50 '
                  style={{ backgroundImage: `url('/images/19.png')`, backgroundSize: '100% 100%' }}>
                <div className="m-5 leading-relaxed
                      overflow-y-auto overflow-x-hidden scroll-smooth
                      scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent scrollbar- scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                  <li>ดัชนีมวลกาย(BMI) = <b>{bmi}</b> <br />
                    {resultFromBmi[id - 1]}
                  </li>
                  <li>
                    {resultFromWhr[id - 1]}<br />
                    มี BMI {finalResult[id - 1]} และ{resultFromWhr[id - 1]}
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className='z-50'>
            <Link href={'/bmi-rating'}>
              <button className='bg-yellow-500 text-black border-4 border-black 
                font-medium text-xl font-prompt py-2 px-10 rounded-full  hover:bg-white
                hover:text-yellow-600 hover:border-yellow-600'>
                GO
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}