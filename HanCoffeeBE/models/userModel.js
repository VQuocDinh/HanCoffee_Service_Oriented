import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:{type:String, required:true},
    address:{type:String, required:true},
    name:{type:String, required:true},
    phone:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    date:{type:Date,default:Date.now()},
    role:{type:Number ,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;