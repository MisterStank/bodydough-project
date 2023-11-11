import Image from "next/image"

function Paper() {
  return (
        <div className='flex justify-center p-0 m-0 w-screen h-4/5 relative'>
            <Image
                src="/images/9.png"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="about"
            />
            <div className='block content-center absolute top-12 z-20 text-left font-ktd text-[min(4vw,1.5rem)] text-shadow-md
                space-y-4 leading-loose m-2 overflow-y-auto max-h-[80%] max-w-[70%]'>
                <div className="indent-4">เว็บไซต์นี้ เป็นนวัตกรรมของรายวิชา Nutrition Assessment 1 รหัสวิชา 3743307 ของคณะสหเวชศาสตร์ 
                สาขาโภชนาการและการกำหนดอาหาร จัดทำขึ้นเพื่อประเมินความสมส่วนของร่างกายผ่านดัชนีมวลกาย(BMI) 
                และประเมินภาวะอ้วนลงพุงแบบลูกแพร์ และแบบแอปเปิ้ลผ่านเส้นรอบเอวและเส้นรอบสะโพก </div>
                
            </div>
      </div>
  )
}

export default Paper