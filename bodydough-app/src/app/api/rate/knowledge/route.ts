import { NextRequest, NextResponse } from "next/server";
import { dbConnection } from "@/app/utills/db";

const Userinfos = require("../../../utills/models");

// Update User Rating in the database
export async function POST(req : NextRequest){
    try {
        await dbConnection();
        const body = await req.json();
        await Userinfos.findOneAndUpdate({name : body.name},{knowledge : body.knowledge});
      return NextResponse.json({message : "updated success"});
    } catch (error : any) {
      return NextResponse.json(error.message, {
        status: 400,
      });
    }  
}