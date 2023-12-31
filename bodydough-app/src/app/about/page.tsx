import Link from 'next/link'
import Paper from '@/components/paper'

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center h-5/6 z-50'>
      <div className='z-50 text-5xl font-sriracha m-5'>คำชี้แจง</div>
      <Paper/>
      <Link href={'/measure-wraist'}>
          <button className='bg-yellow-500 text-black border-4 border-black 
          font-medium text-xl font-prompt py-2 px-10 rounded-full  hover:bg-white
           hover:text-yellow-600 hover:border-yellow-600'>
            GO
          </button>
      </Link>
    </div>
  )
}
