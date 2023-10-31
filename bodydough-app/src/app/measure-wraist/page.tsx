import Image from 'next/image'
import Link from 'next/link'

export default function Wraist() {
  return (
    <div>
      <Link href={'/measure-hip'}>
          <button className='bg-yellow-500 text-black border-4 border-black 
          font-medium text-xl font-prompt py-2 px-10 rounded-full  hover:bg-white
           hover:text-yellow-600 hover:border-yellow-600'>
            GO
          </button>
        </Link>
    </div>
  )
}
