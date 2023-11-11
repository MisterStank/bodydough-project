import mongoose , {Schema , model, models} from "mongoose";
import { Userinfo } from "../types/userinfo";

// Schema 
const UserinfoSchema = new Schema<Userinfo>({
    name: {type : String , default : null},
    age : {type : Number , default : 0},
    gender : {type : String , default : "male"},
    weight : {type : Number , default : 0},
    height : {type : Number , default : 0},
    waist : {type : Number , default : 0},
    hip : {type : Number , default : 0},
    result : {type : Number , default : 0},
    timestamp : {type : Date },
    bmiaccuracy : {type : Number , default : 0},
    whraccuracy : {type : Number , default : 0},
    convenient : {type : Number , default : 0},
    rating : {type : Number , default : 0},
    comment : {type : String , default : ""}
}); 

module.exports = models.userinfos || mongoose.model('userinfomations',UserinfoSchema);