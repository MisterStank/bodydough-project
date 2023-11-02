import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";

export default function Page({ params }: { params: { id: number } }) {
   const id = params.id;
   const results : string[] = [
    "ผอม เเละ whr ปกติ",
    "ผอม เเต่ whr เกิน",
    "สมส่วน เเละ whr ปกติ",
    "สมส่วน เเต่ whr เกิน",
    "น้ำหนักเกิน เเต่ whr ปกติ",
    "น้ำหนักเกิน เเต่ whr เกิน"
   ];
   const result = results[id-1];
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
            <Image src='/images/5.png'
               alt='card'
               fill={true}
               className='object-contain rounded-lg' />
         </div>
        <div className="flex w-full h-[400px] relative">
          <div className='my-5 p-10 w-[100%] max-h-[300px] text-[min(4vw,1.5rem)] text-gray-700 rounded-lg 
            flex font-ktd bg-white shadow-md z-50 overflow-y-auto overflow-x-hidden scroll-smooth
            scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar- scrollbar-thumb-rounded-full scrollbar-track-rounded-full'
            style={{ backgroundImage: `url('/images/19.png')`, backgroundSize: '100% 100%' }}>
               {result}
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