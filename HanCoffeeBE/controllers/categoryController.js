import categoryModel from "../models/categoryModel.js";
import fs from 'fs';

const addCategory = async (req,res) =>{
    let image_filename = `${req.file.filename}`;

    const category = new categoryModel({
        name:req.body.name,
        id:req.body.id,
        status :req.body.status,
        image:image_filename
    })
    try {
        await category.save();
        res.json({success:true, message:"Category added successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

//all categories list
const listCategories = async(req, res) =>{
    try {
        const categories = await categoryModel.find({});
        res.json({success:true, data:categories})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {addCategory, listCategories}