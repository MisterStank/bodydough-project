import { NextRequest , NextResponse } from "next/server";
import { dbConnection } from "@/app/utills/db";

const Userinfos = require("../../utills/models");

// Update User convenient

export async function POST(req : NextRequest){
    try{
        await dbConnection();
        const body = await req.json();
        await Userinfos.findOneAndUpdate({name : body.name},{convenient : body.convenient});
        return NextResponse.json({message : "updated success"});
    }catch(error : any){
        return NextResponse.json(error.message , {
            status : 400,
        });
    }
}