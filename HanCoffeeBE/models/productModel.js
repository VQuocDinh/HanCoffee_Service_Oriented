import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{type:String, require:true},
    name:{type:String, require:true},
    desc:{type:Number, require:true},
    category:{type:String, require:true},
    price:{type:String, require:true},
    image:{type:String, require:true},
    status:{type:Number, require:true},

})

const productModel = mongoose.models.product || mongoose.model("product", productSchema)
export default productModel