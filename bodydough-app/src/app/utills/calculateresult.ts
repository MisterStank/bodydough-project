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
    const bmi = parseFloat((weight / (height/100)**2).toFixed(1)); // calculate bmi and fixed decimal 1 digit
    const whr  = waist/ hip;
    const waistCheck = gender === "male" ? 90 : 80;
    if (gender === "male"){
        if (bmi < 18.5) {
            if (waist < hip && hip > waistCheck && whr < waistCheck/100) return 1;
            if (waist > hip && whr > waistCheck/100) return 2;
            return 3;
        }else if (bmi <= 22.9){
            if (waist < hip && hip > waistCheck && whr < waistCheck/100) return 4;
            if (waist > hip && whr > waistCheck/100) return 5;
            return 6;
        }else if(bmi <= 24.9){
            if (waist < hip && hip > waistCheck && whr < waistCheck/100) return 7;
            if (waist > hip && whr > waistCheck/100) return 8;
            return 9;
        }else if(bmi <= 29.9){
            if (waist < hip && hip > waistCheck && whr < waistCheck/100) return 19;
            if (waist > hip && whr > waistCheck/100) return 20;
            return 21;
        }else{
            if (waist < hip && hip > waistCheck && whr < waistCheck/100) return 22;
            if (waist > hip && whr > waistCheck/100) return 23;
            return 24;
        }
    }else{
        if (bmi < 18.5) {
            if (waist < hip && hip > waistCheck && whr < waistCheck/100) return 10;
            if (waist > hip && whr > waistCheck/100) return 11;
            return 12;
        }else if (bmi <= 22.9){
            if (waist < hip && hip > waistCheck && whr < waistCheck/100) return 13;
            if (waist > hip && whr > waistCheck/100) return 14;
            return 15;
        }else if(bmi <= 24.9){
            if (waist < hip && hip > waistCheck && whr < waistCheck/100) return 16;
            if (waist > hip && whr > waistCheck/100) return 17;
            return 18;
        }else if(bmi <= 29.9){
            if (waist < hip && hip > waistCheck && whr < waistCheck/100) return 25;
            if (waist > hip && whr > waistCheck/100) return 26;
            return 27;
        }else{
            if (waist < hip && hip > waistCheck && whr < waistCheck/100) return 28;
            if (waist > hip && whr > waistCheck/100) return 29;
            return 30;
        }
    }
}

export const calculateBmi = (weight : number , height : number) : number =>{
    const bmi = parseFloat((weight / (height/100)**2).toFixed(1));
    return bmi;
}

export const calculateWhr = (waist : number , hip : number ) : number =>{
    const whr  = parseFloat((waist/hip).toFixed(2));
    return whr;
}
