import Image from 'next/image'
import Link from 'next/link'

export default function Hip() {
  return (
    <div className='flex flex-col items-center h-5/6'>
      <Image
        src={'/bgwraist.png'}
        alt='cover'
        fill={true}
        objectFit='cover'
      />
      <div className='z-50 text-5xl font-sriracha m-5'>วิธีวัดเส้นรอบสะโพก</div>
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
