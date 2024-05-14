import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{type:String, require:true},
    name:{type:String, require:true},
    desc:{type:Intl, require:true},
    category:{type:String, require:true},
    price:{type:String, require:true},
    image:{type:String, require:true},
    status:{type:Intl, require:true},

})

const productModel = mongoose.models.product || mongoose.model("product", productSchema)
export default productModel