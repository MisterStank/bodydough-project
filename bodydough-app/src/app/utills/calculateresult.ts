//  define

/*
    1 is ผอม เเละ whr ปกติ
    2 is ผอม เเต่ whr เกิน
    3 is สมส่วน เเละ whr ปกติ
    4 is สมส่วน เเต่ whr เกิน
    5 is น้ำหนักเกิน เเต่ whr ปกติ
    6 is น้ำหนักเกิน เเต่ whr เกิน
*/
export const calculateResult = (gender : string,weight : number,height : number,waist : number, hip : number) : Number =>{
    const bmi = weight / (height/100)**2;
    const whr  = waist/ hip;
    const waistCheck = gender === "male" ? 90 : 80;
    const whrIsNormal = whr < waistCheck/100

    if (bmi < 18.5) {
        if(whrIsNormal) return 1;
        return 2;
    }else if (bmi < 23){
        if(whrIsNormal) return 3;
        return 4;
    }else{
        if(whrIsNormal) return 5;
        return 6;
    }
}