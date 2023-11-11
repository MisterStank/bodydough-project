import Image from "next/image"
import Link from "next/link"

function BMI() {
    return (
        <div>
            <div className='flex flex-col items-center h-5/6'>
                <Image
                    src={'/bgresult.png'}
                    alt='cover'
                    fill={true}
                    objectFit='cover'
                />

                <div className="m-5 flex w-[90%] sm:w-[70%] max-h-[400px] sm:max-h-[600px] relative flex-col item-center">
                    <div className='p-5 w-[100%] max-h-[400px] sm:max-h-[600px] text-[min(4vw,1.5rem)] text-gray-700 rounded-lg 
                        flex font-ktd bg-white shadow-md z-50 '
                        style={{ backgroundImage: `url('/images/19.png')`, backgroundSize: '100% 100%' }}>
                        <div className="m-5 leading-relaxed
                            overflow-y-auto overflow-x-hidden scroll-smooth
                            scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent scrollbar- scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                            ดัชนีมวลกาย(BMI) วัดจากน้ำหนักเทียบส่วนสูง<br/>
                            โดยมีเกณฑ์ดังนี้<br/>
                            น้อยกว่า 18.50 อยู่ในเกณฑ์ผอม<br/>
                            ระหว่าง 18.50-22.90 อยู่ในเกณฑ์ปกติ<br/>
                            ระหว่าง 23.00-24.90 อยู่ในเกณฑ์อ้วนระดับ 1<br/>
                            ระหว่าง 25.00-29.90 อยู่ในเกณฑ์อ้วนระดับ 2<br/>
                            มากกว่า 30.00 อยู่ในเกณฑ์อ้วนระดับ 3<br/>
                            หมายเหตุ<br/>
                            ดัชมีมวลกาย(BMI) ใช้วัดความสมส่วนของร่างกายผ่านน้ำหนักตัวและส่วนสูง<br/>
                            โดยน้ำหนักอาจจะเกิดจากน้ำหนักของมวลกล้ามเนื้อแทนมวลไขมัน ซึ่งสามารถเกิดขึ้นได้กับนักกีฬาหรือผู้ที่ออกกำลังกาย 
                        </div>
                    </div>
                </div>

                <div className='z-50'>
                    <Link href={'/belly'}>
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

export default BMI