import Image from 'next/image'


function Card({ desCription, imgSrc }: { desCription: string, imgSrc: string }) {
  return (
    <div className='w-80vw h-200 bg-white shadow-md rounded-lg pt-0  flex'>
      <div className='flex-none w-80 h-full relative'> 
          <Image src={imgSrc}
            alt='card'
            fill={true}
            className='object-fit rounded-t-lg' />
      </div>
      <div className='p-10 w-full h-[200px] text-2xl text-gray-700 rounded-r-lg flex font-prompt'>{desCription}</div>
    </div>
  )
}

export default Card