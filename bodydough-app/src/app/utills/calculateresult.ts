//  define 1 is หุ่นดี 2 is อ้วน 3 is ผอม 4 is เส้นรอบเอวเกิน
export const calculateResult = (age : number,gender : string,weight : number,height : number,waist : number, hip : number) : Number =>{
    const bmi = weight / (height/100)**2;
    const whr  = waist/ hip;
    const waistCheck = gender === "male" ? 90 : 80;
    if (!(waist < waistCheck && whr < waistCheck/100)){
        return 4;
    }
    if (bmi < 18.5){
        return 3;
    }else if (bmi < 23){
        return 1;
    }
    return 2;
}