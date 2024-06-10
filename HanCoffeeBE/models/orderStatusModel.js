import mongoose from "mongoose";


const orderStatusSchema = new mongoose.OrderSchema({
    date:{type:Date,default:Date.now()},
    id:{type:String ,required:true},
    idCategory:{type:String,required:true},
    idUser:{type:String ,required:true},
    price:{type:Number ,required:true}
})

const orderStatusModel = mongoose.models.order || mongoose.model("orderStatus", orderStatusSchema);
export default orderStatusModel;