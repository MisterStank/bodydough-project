import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/Card'

export default function Hip() {
  return (
    <div className='flex flex-col items-center h-5/6'>
      <Image
        src={'/bgwraist.png'}
        alt='cover'
        fill={true}
        objectFit='cover'
      />
      <div className='z-50 text-4xl font-sriracha m-5'>วิธีวัดเส้นรอบสะโพก</div>
      <div className='my-5 mx-10 grid grid-cols-1 sm:grid-cols-2 gap-1 z-50 overflow-y-scroll overflow-x-hidden scroll-smooth
        scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar- scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        <Card desCription='' imgSrc='/images/19.png'/>
        <div>
          <div className='my-5 p-5 w-full max-h-[200px] text-[min(4vw,1.5rem)] text-gray-700 rounded-lg 
            flex font-ktd bg-white shadow-md'>
            ยืนตัวตรงและสังเกตหาส่วนที่ผายที่สุดในร่างกาย ส่วนมากจะอยู่บริเวณบั้นท้าย ใช้สายวัดพาดรอบสะโพก ระวังไม่ให้สายวัดบิดเบี้ยวและรัดตึงจนเกินไป เพื่อค่าที่ถูกต้องแม่นยำ
          </div>
          <div className='p-5 w-full max-h-[200px] text-[min(4vw,1.5rem)] text-gray-700 rounded-lg 
            flex font-ktd bg-white'>
            ไม่พันสายวัดเอวเเน่นเกินไป และไม่ควรวัดสูงหรือต่ำเกินไป รวมถึงไม่นำนิ้วสอดเข้าไปในสายวัด
          </div>
        </div>
      </div>
      <div className='z-50'>
        <Link href={'/info'}>
          <button className='bg-yellow-500 text-black border-4 border-black 
          font-medium text-xl font-prompt py-2 px-10 rounded-full  hover:bg-white
           hover:text-yellow-600 hover:border-yellow-600'>
            GO
          </button>
        </Link>
      </div>
    </div>
  )
}
