import Image from "next/image";
import ReactStars from "react-stars";
export default function RatingPage(){
    return(
        <div className='w-screen h-screen flex divide-x items-center justify-center h-screen'>
            <Image
                src={'/Infopage.jpg'}
                alt='cover'
                fill={true}
                objectFit='cover'
            />
            <div className='w-60% mg-4 pd-20 relative flex flex-col font-sriracha items-center justify-center rounded-lg border-4 border-gray-500'>
                <ReactStars 
                count={5} 
                size={24} 
                color2={'#ffd700'} 
                /> 
                <p className='md:text-xl lg:text-3xl xl:text-4xl mb-2 mt-5'>ความพึงพอใจในการใช้เว็บไซต์</p>
                    <button className='bg-yellow-500 text-black border-4 border-black 
                    font-medium text-xl font-prompt py-2 px-10 rounded-full  hover:bg-white
                    hover:text-yellow-600 hover:border-yellow-600 mb-5' >
                        SUBMIT
                    </button>
            </div>
        </div>
    );
}