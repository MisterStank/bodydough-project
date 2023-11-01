import Link from "next/link";

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
    My Post: {result}
    <Link href={'/rating'}>
          <button className='bg-yellow-500 text-black border-4 border-black 
          font-medium text-xl font-prompt py-2 px-10 rounded-full  hover:bg-white
           hover:text-yellow-600 hover:border-yellow-600'>
            GO
          </button>
      </Link>
   </div>);
}