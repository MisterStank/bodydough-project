import { NextResponse , NextRequest } from "next/server";
import { dbConnection } from "../utills/db";

const Userinfos = require("../utills/models");

export async function GET() {
    await dbConnection();
    const alluserinfos = await Userinfos.find()
    return NextResponse.json(alluserinfos);
};

export async function POST(req: NextRequest) {
    try {
        await dbConnection();
        const body = await req.json();
        const oldUserInfo = await Userinfos.findOne({name : body.name});
        if(oldUserInfo){
          const newUserinfo = await Userinfos.findOneAndUpdate({name : body.name},{
            name : body?.name,
            age :  body?.age,
            gender : body.gender,
            weight : body.weight,
            height : body.height,
            waist : body.waist,
            hip : body.hip,
            result : body.result,
            timestamp : body.timestamp,
          });
          return NextResponse.json(newUserinfo);
        }
        const newUserinfo = await Userinfos.create({
            name : body?.name,
            age :  body?.age,
            gender : body.gender,
            weight : body.weight,
            height : body.height,
            waist : body.waist,
            hip : body.hip,
            result : body.result,
            timestamp : body.timestamp,
        });
      return NextResponse.json(newUserinfo);
    } catch (error : any) {
      return NextResponse.json(error.message, {
        status: 400,
      });
    }
}
