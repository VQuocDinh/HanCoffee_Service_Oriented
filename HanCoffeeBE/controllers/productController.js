import productModel from "../models/productModel.js";

//fetch all product
const productList = async (req,res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true,data:products})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {productList}