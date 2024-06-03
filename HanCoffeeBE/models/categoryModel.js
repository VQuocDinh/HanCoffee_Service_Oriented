import mongoose from "mongoose"
const categoryShema = new mongoose.Schema({
    id:{type:String, require:true},
    name: {type:String, require:true},
    image:{type:String, require:true},
    status:{type:Number, require:true},
    
})

const categoryModel = mongoose.models.category || mongoose.model("category", categoryShema)
export default categoryModel