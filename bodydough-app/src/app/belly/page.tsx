import Image from "next/image"
import Link from "next/link"

function belly() {
    return (
        <div>
            <div className='flex flex-col items-center h-5/6'>
                <Image
                    src={'/bgresult.png'}
                    alt='cover'
                    fill={true}
                    objectFit='cover'
                />

                <div className="m-5 flex w-[90%] sm:w-[60%] max-h-[400px] sm:max-h-[600px] relative flex-col item-center">
                    <div className='p-5 w-[100%] max-h-[400px] sm:max-h-[600px] text-[min(4vw,1.5rem)] text-gray-700 rounded-lg 
                        flex font-ktd bg-white shadow-md z-50 '
                        style={{ backgroundImage: `url('/images/19.png')`, backgroundSize: '100% 100%' }}>
                        <div className="m-5 leading-loose
                            overflow-y-auto overflow-x-hidden scroll-smooth
                            scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent scrollbar- scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                            ภาวะอ้วนลงพุงแบบแอปเปิ้ล วัดจากเส้นรอบเอวเทียบเส้นรอบสะโพก(WHR) หน่วยเซนติเมตร โดย<br/>
                            ผู้ชายมีค่า WHR มากกว่า 0.9<br/>
                            ผู้หญิงมีค่า WHR มากกว่า 0.8<br/>
                            จะถือว่ามีภาวะอ้วนลงพุงแบบแอปเปิ้ล 
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
        </div>
    )
}

export default belly