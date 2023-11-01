export default function Page({ params }: { params: { id: number } }) {
   const id = params.id;
   const results : string[] = [
    "ผอม เเละ whr ปกติ",
    "ผอม เเต่ whr เกิน",
    "สมส่วน เเละ whr ปกติ",
    "สมส่วน เเต่ whr เกิน",
    "น้ำหนักเกิน เเต่ whr ปกติ",
    "น้ำหนักเกิน เเต่ whr เกิน"
   ];
   const result = results[id-1];
   return (
   <div>
    My Post: {result}
   </div>);
}