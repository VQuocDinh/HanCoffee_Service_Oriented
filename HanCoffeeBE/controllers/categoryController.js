import categoryModel from "../models/categoryModel.js"

// fetch all category
const categoryList = async (req,res)=>{
    try {
        const categorys = await categoryModel.find({})
        res.json({success:true,data:categorys})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})

    }
}

export {categoryList}