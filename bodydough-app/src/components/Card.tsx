import Image from 'next/image'


function Card({ desCription, imgSrc }: { desCription: string, imgSrc : string }) {
  return (
    <div className='max-w-full bg-white shadow-md rounded-lg  flex flex-col m-5'>
      <div className='flex-none w-full h-[300px] relative'> 
          <Image src={imgSrc}
            alt='card'
            fill={true}
            className='object-fill rounded-t-lg' />
      </div>
      {desCription && (
        <div className='p-5 w-full max-h-[200px] text-[min(4vw,1.5rem)] text-gray-700 rounded-r-lg flex font-ktd'>
          {desCription}
        </div>
      )}
    </div>
  )
}

export default Card