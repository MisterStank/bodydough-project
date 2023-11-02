//  definitions 
/*
   [
    ชายก่อนหญิง
    1"ดัชนีมวลกายของคุณอยู่ในเกณฑ์ที่น้อยกว่าปกติ และมีภาวะอ้วนลงพุงแบบลูกแพร์",
    2"ดัชนีมวลกายของคุณอยู่ในเกณฑ์น้อยกว่าปกติ และมีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    3"ดัชนีมวลกายของคุณอยู่ในเกณฑ์น้อยกว่าปกติ และไม่มีภาวะอ้วนลงพุง",
    4"ดัชนีมวลกายของคุณอยู่ในเกณฑ์ปกติ และมีภาวะอ้วนลงพุงแบบลูกแพร์",
    5"ดัชนีมวลกายของคุณอยู่ในเกณฑ์ปกติ และมีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    6"ดัชนีมวลกายของคุณอยู่ในเกณฑ์ปกติ และไม่มีภาวะอ้วนลงพุง",
    7"ดัชนีมวลกายของคุณอยู่ในเกณฑ์มากกว่าปกติ และมีภาวะอ้วนลงพุงแบบลูกแพร์",
    8"ดัชนีมวลกายของคุณอยู่ในเกณฑ์มากกว่าปกติ และมีภาวะอ้วนลงพุงแบบแอปเปิ้ล",
    9"ดัชนีมวลกายของคุณอยู่ในเกณฑ์มากกว่าปกติ และไม่มีภาวะอ้วนลงพุง",
   ];
*/
export const calculateResult = (gender : string,weight : number,height : number,waist : number, hip : number) : Number =>{
    const bmi = weight / (height/100)**2;
    const whr  = waist/ hip;
    const waistCheck = gender === "male" ? 90 : 80;
    const whrIsNormal = whr < waistCheck/100
    if (gender === "male"){
        if (bmi < 18.5) {
            if (waist < hip && whr > waistCheck && whr < waistCheck/100) return 1;
            if (waist > hip && whr > waistCheck/100) return 2;
            return 3;
        }else if (bmi < 23){
            if (waist < hip && whr > waistCheck && whr < waistCheck/100) return 4;
            if (waist > hip && whr > waistCheck/100) return 5;
            return 6;
        }else{
            if (waist < hip && whr > waistCheck && whr < waistCheck/100) return 7;
            if (waist > hip && whr > waistCheck/100) return 8;
            return 9;
        }
    }else{
        if (bmi < 18.5) {
            if (waist < hip && whr > waistCheck && whr < waistCheck/100) return 10;
            if (waist > hip && whr > waistCheck/100) return 11;
            return 12;
        }else if (bmi < 23){
            if (waist < hip && whr > waistCheck && whr < waistCheck/100) return 13;
            if (waist > hip && whr > waistCheck/100) return 14;
            return 15;
        }else{
            if (waist < hip && whr > waistCheck && whr < waistCheck/100) return 16;
            if (waist > hip && whr > waistCheck/100) return 17;
            return 18;
        }
    }
}