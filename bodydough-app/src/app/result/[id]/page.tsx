"use client"
import Link from "next/link";
import Image from "next/image";

export default function Page({ params }: { params: { id: number } }) {
   const id = params.id;
   const results : string[] = [
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์ที่น้อยกว่าปกติ และมีภาวะอ้วนลงพุงแบบลูกแพร์",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์น้อยกว่าปกติ และมีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์น้อยกว่าปกติ และไม่มีภาวะอ้วนลงพุง",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์ปกติ และมีภาวะอ้วนลงพุงแบบลูกแพร์",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์ปกติ และมีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์ปกติ และไม่มีภาวะอ้วนลงพุง",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์มากกว่าปกติ และมีภาวะอ้วนลงพุงแบบลูกแพร์",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์มากกว่าปกติ และมีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์มากกว่าปกติ และไม่มีภาวะอ้วนลงพุง",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์ที่น้อยกว่าปกติ และมีภาวะอ้วนลงพุงแบบลูกแพร์",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์น้อยกว่าปกติ และมีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์น้อยกว่าปกติ และไม่มีภาวะอ้วนลงพุง",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์ปกติ และมีภาวะอ้วนลงพุงแบบลูกแพร์",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์ปกติ และมีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์ปกติ และไม่มีภาวะอ้วนลงพุง",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์มากกว่าปกติ และมีภาวะอ้วนลงพุงแบบลูกแพร์",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์มากกว่าปกติ และมีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    "ดัชนีมวลกายของคุณอยู่ในเกณฑ์มากกว่าปกติ และไม่มีภาวะอ้วนลงพุง",
   ];
   const texts = [
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ เพิ่มปริมาณอาหารที่รับประทาน หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ เพิ่มปริมาณอาหารที่รับประทาน หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ เพิ่มปริมาณอาหารที่รับประทาน หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง ",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง ออกกำลังกายอย่างน้อย 3 วันต่อสัปดาห์ อย่างน้อยวันละ 30 นาที ",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง ออกกำลังกายอย่างน้อย 3 วันต่อสัปดาห์ อย่างน้อยวันละ 30 นาที ",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง ออกกำลังกายอย่างน้อย 3 วันต่อสัปดาห์ อย่างน้อยวันละ 30 นาที เพื่อสุขภาพร่างกายที่แข็งแรงยิ่งขึ้น",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ แต่ลดปริมาณอาหาร หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง ออกกำลังกายอย่างน้อย 3 วันต่อสัปดาห์ อย่างน้อยวันละ 30 นาที เพื่อสุขภาพร่างกายที่แข็งแรงยิ่งขึ้น ",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ แต่ลดปริมาณอาหาร หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง ออกกำลังกายอย่างน้อย 3 วันต่อสัปดาห์ อย่างน้อยวันละ 30 นาที เพื่อสุขภาพร่างกายที่แข็งแรงยิ่งขึ้น ",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ เนื่องจากคุณไม่มีภาวะอ้วนลงพุง แต่มีค่า BMI มากกว่าค่าปกติ อาจจะเกิดจากน้ำหนักของมวลกล้ามเนื้อที่มากกว่าน้ำหนักจากมวลไขมัน สามารถเกิดขึ้นได้กับนักกีฬา ผู้ที่ออกกำลังกาย และนักเพาะกล้าม เป็นต้น",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ เพิ่มปริมาณอาหารที่รับประทาน หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ เพิ่มปริมาณอาหารที่รับประทาน หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ เพิ่มปริมาณอาหารที่รับประทาน หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง ",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง ออกกำลังกายอย่างน้อย 3 วันต่อสัปดาห์ อย่างน้อยวันละ 30 นาที ",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง ออกกำลังกายอย่างน้อย 3 วันต่อสัปดาห์ อย่างน้อยวันละ 30 นาที ",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง ออกกำลังกายอย่างน้อย 3 วันต่อสัปดาห์ อย่างน้อยวันละ 30 นาที เพื่อสุขภาพร่างกายที่แข็งแรงยิ่งขึ้น",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ แต่ลดปริมาณอาหาร หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง ออกกำลังกายอย่างน้อย 3 วันต่อสัปดาห์ อย่างน้อยวันละ 30 นาที เพื่อสุขภาพร่างกายที่แข็งแรงยิ่งขึ้น ",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ แต่ลดปริมาณอาหาร หลีกเลี่ยงการรับประทานอาหารประเภทที่มีไขมันสูง ออกกำลังกายอย่างน้อย 3 วันต่อสัปดาห์ อย่างน้อยวันละ 30 นาที เพื่อสุขภาพร่างกายที่แข็งแรงยิ่งขึ้น ",
    " คำแนะนำ คือ คุณควรรับประทานอาหารให้ครบ 5 หมู่ และครบ 3 มื้อ เนื่องจากคุณไม่มีภาวะอ้วนลงพุง แต่มีค่า BMI มากกว่าค่าปกติ อาจจะเกิดจากน้ำหนักของมวลกล้ามเนื้อที่มากกว่าน้ำหนักจากมวลไขมัน สามารถเกิดขึ้นได้กับนักกีฬา ผู้ที่ออกกำลังกาย และนักเพาะกล้าม เป็นต้น",
  ]
   const result = results[id-1];
   const img = `/images/result/${id}.png`
   return (
   <div>
    <div className='flex flex-col items-center h-full'>
      <Image
        src={'/bgresult.png'}
        alt='cover'
        fill={true}
        objectFit='cover'
      />
      <div className='my-5 mx-10 grid grid-cols-1 sm:grid-cols-2 gap-1 z-50 overflow-y-auto overflow-x-hidden scroll-smooth
        scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar- scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        <div className="flex-none w-full h-[300px] relative">
            <Image src={`/images/result/${id}.png`}
               alt='card'
               fill={true}
               className='object-contain rounded-lg' />
         </div>
        <div className="flex w-full max-h-[400px] relative flex-col item-center">
          <div className='my-5 p-10 w-[100%] max-h-[300px] text-[min(4vw,1.5rem)] text-gray-700 rounded-lg 
            flex font-ktd bg-white shadow-md z-50 overflow-y-auto overflow-x-hidden scroll-smooth
            scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar- scrollbar-thumb-rounded-full scrollbar-track-rounded-full'
            style={{ backgroundImage: `url('/images/19.png')`, backgroundSize: '100% 100%' }}>
               {result + texts[id-1]}
          </div>
        </div>
      </div>

      <div className='z-50'>
        <Link href={'/rating'}>
          <button className='bg-yellow-500 text-black border-4 border-black 
          font-medium text-xl font-prompt py-2 px-10 rounded-full  hover:bg-white
           hover:text-yellow-600 hover:border-yellow-600'>
            GO
          </button>
        </Link>
      </div>
    </div>
   </div>);
}