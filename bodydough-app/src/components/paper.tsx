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
            <div className='block content-center absolute top-12 z-20 text-left font-prompt text-[min(4vw,1.5rem)] text-shadow-md
                space-y-4 leading-loose m-2 overflow-y-auto max-h-[80%] max-w-[70%]'>
                <div className="indent-4">เว็บไซต์นี้เป็นนวัตกรรมของรายวิชา Nutrition Assessment 1 รหัสวิชา 3743307 ของคณะสหเวชศาสตร์
                สาขาโภชนาการและการกำหนดอาหาร จัดทำขึ้นเพื่อเป็นแนวทางให้ผู้ที่ได้ใช้งานนั้น ได้ดูแลสุขภาพให้ดีขี้น   
                เว็บไซต์นี้เกี่ยวกับ เรื่องของเส้นรอบเอวและเส้นรอบสะโพก</div>
                <div className="indent-4">เส้นรอบพุง หรือ เส้นรอบเอว เป็นข้อมูลหนึ่งที่สามารถบอกถึงความเสี่ยงในการเกิด 
                โรคเบาหวาน ความดันโลหิตสูง ไขมันในเลือดผิดปรกติ ตลอดจนโรคอ้วน 
                ซึ่งเป็นกลุ่มโรคที่เกิดจากการที่มีไขมันในช่องท้องมากเกินไป แน่นอนว่าโรคเหล่านี้ย่อมไม่ส่งผลดีต่อสุขภาพแน่ๆ
                ดังนั้น เราควรเช็คเส้นรอบเอวของเราดูว่า มีความเสี่ยงในการเกิดโรคดังกล่าวมากน้อยเพียงใดนั้นเอง</div>
            </div>
      </div>
  )
}

export default Paper