"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter} from "next/navigation";
import { calculateResult } from "../utills/calculateresult";

function Infopage() {
    const [name,setName] = useState<string>('');
    const [age,setAge] = useState<number>(0);
    const [gender,setGender] = useState<string>('male');
    const [weight,setWeight] = useState<number>(0);
    const [height,setHeight] = useState<number>(0);
    const [waist,setWaist] = useState<number>(0);
    const [hip,setHip] = useState<number>(0);


    const router = useRouter();

    // A function to handle changes for all states
    const handleNameChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    };

    const handleAgeChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setAge(parseInt(e.target.value));
    };

    const handleGenderChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value)
    };

    const handleWeightChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setWeight(parseInt(e.target.value));
    };
    
    const handleHeightChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setHeight(parseInt(e.target.value));
    };

    const handleWaistChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setWaist(parseInt(e.target.value));
    };

    const handleHipChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setHip(parseInt(e.target.value));
    };

    const fetchData = async() =>{
        try {
            const resultNum = await calculateResult(
                age,gender,weight,height,waist,hip
            );
            await fetch("/api", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name : name,
                age : age,
                gender : gender,
                weight : weight,
                height : height,
                waist : waist,
                hip : hip,
                result : resultNum,
                timestamp : new Date(),
              }),
            });
            // keep user data at the localstorage
            await localStorage.setItem("userinfos" ,
                JSON.stringify({
                    name : name,
                    age : age,
                    gender : gender,
                    weight : weight,
                    height : height,
                    waist : waist,
                    hip : hip,
                    result : 0,
                    timestamp : new Date(),
                }),
            );
            router.push(`/result/${resultNum}`);
          } catch (error) {
            console.error(error);
          }
    };

    return (
        <div className='w-screen h-screen flex divide-x items-center justify-center h-screen'>
            <Image
                src={'/Infopage.jpg'}
                alt='cover'
                fill={true}
                objectFit='cover'
            />
            <div className='w-60% mg-4 pd-20 relative flex flex-col font-sriracha items-center justify-center rounded-lg border-4 border-gray-500'>
                <p className='md:text-xl lg:text-3xl xl:text-4xl mb-2 mt-5'>ข้อมูลทั่วไป</p>
                <ul className='md:text-xs lg:text-sm xl:text-base mb-5 mx-5'>
                    <p className='mx-1 my-3'>
                        ชื่อ (นามเเฝง)
                        <span className="inline-flex items-baseline">
                            <input className="self-center w-32 h-6  mx-2" type="text" value={name} onChange={handleNameChange} />
                        </span>
                    </p>
                    <p className='mx-1 my-3'>
                        อายุ
                        <span className="inline-flex items-baseline">
                            <input className="self-center w-32 h-6  ml-10 mr-2" type="number" value={age} onChange={handleAgeChange} />
                        </span>
                        ปี
                    </p>
                    <p className='mx-1 my-3'>
                        เพศ
                        <span className="inline-flex items-baseline">
                            <select name="options" className='self-center w-32 h-6  ml-10 mr-2' value={gender} onChange={handleGenderChange}>
                                <option value="male">ชาย</option>
                                <option value="female">หญิง</option>
                            </select>
                        </span>
                    </p>
                    <p className='mx-1 my-3'>
                        น้ำหนัก
                        <span className="inline-flex items-baseline">
                            <input className="self-center w-32 h-6  ml-5 mr-2" type="number" value={weight} onChange={handleWeightChange} />
                        </span>
                        กิโลกรัม
                    </p>
                    <p className='mx-1 my-3'>
                        ส่วนสูง
                        <span className="inline-flex items-baseline">
                            <input className="self-center w-32 h-6  ml-6 mr-2" type="number" value={height} onChange={handleHeightChange} />
                        </span>
                        เซนติเมตร
                    </p>
                    <p className='mx-1 my-3'>
                        รอบเอว
                        <span className="inline-flex items-baseline">
                            <input className="self-center w-32 h-6  ml-5 mr-2" type="number" value={waist} onChange={handleWaistChange} />
                        </span>
                        เซนติเมตร
                    </p>
                    <p className='mx-1 my-3'>
                        รอบสะโพก
                        <span className="inline-flex items-baseline">
                            <input className="self-center w-32 h-6  ml-2 mr-2" type="number" value={hip} onChange={handleHipChange} />
                        </span>
                        เซนติเมตร
                    </p>
                </ul>
                    <button className='bg-yellow-500 text-black border-4 border-black 
                    font-medium text-xl font-prompt py-2 px-10 rounded-full  hover:bg-white
                    hover:text-yellow-600 hover:border-yellow-600 mb-5' onClick={fetchData}>
                        ENTER
                    </button>
            </div>
        </div>
    )
}

export default Infopage;