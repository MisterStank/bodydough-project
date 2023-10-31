export default function Page({ params }: { params: { id: number } }) {
    let result = "เส้นรอบเอวเกิน";
    const id = params.id;
    if (id == 1) result = "หุ่นดี";
    else if (id == 2) result = "อ้วน";
    else if(id == 3) result = "ผอม"
    return <div>My Post: {result}</div>
}