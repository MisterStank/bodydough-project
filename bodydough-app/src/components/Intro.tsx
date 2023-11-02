import Image from "next/image"
import Link from "next/link";

function Intro() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Image
        src={'/Home.jpg'}
        alt='cover'
        fill={true}
        objectFit='fill'
      />
      <div className='relative z-20 text-center text-8xl font-sriracha'>
        <h1>Body dough</h1>
        <h4 className="text-xl font-k2d mt-4">Good food, Good mood and Good life</h4>
        <Link href={'/about'}>
          <button className='bg-yellow-500 text-black border-4 border-black 
          font-medium text-xl font-prompt py-2 px-10 rounded-full  hover:bg-white
           hover:text-yellow-600 hover:border-yellow-600'>
            START
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Intro
