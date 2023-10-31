import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/Card'

export default function Wraist() {
  return (
    <div className='flex flex-col items-center h-5/6'>
      <Image
        src={'/bgwraist.png'}
        alt='cover'
        fill={true}
        objectFit='cover'
      />
      <div className='z-50 text-5xl font-sriracha m-5'>วิธีวัดเส้นรอบเอว</div>
      <div className='m-5 grid grid-cols-1 sm:grid-cols-2 gap-8 z-50'>
        <Card desCription='ถอดหรือเลิกชุดขึ้นมา' imgSrc='/images/19.png'/>
        <Card desCription='นำสายวัดมาพันรอบเอว โดยให้สายวัดขนานกัน และอยู่เหนือสะดือขึ้นมาเล็กน้อย ประมาณ 1 CM' imgSrc='/images/19.png'/>
        <Card desCription='ไม่อยู่เหนือสะดือจนเกินไป และไม่นำนิ้วสอดเข้าไปในสายวัด' imgSrc='/images/19.png'/>
        <Card desCription='ไม่พันสายวัดเอวเเน่นเกินไป' imgSrc='/images/19.png'/>
      </div>
      <div className='z-50 m-5'>
        <Link href={'/measure-hip'}>
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
