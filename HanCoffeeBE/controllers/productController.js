import productModel from "../models/productModel.js";
import fs from 'fs';

// add product item

const addProduct = async (req,res)=> {

    let image_filename = `${req.file.filename}`;

    const product = new productModel({
        name:req.body.name,
        price:req.body.price,
        category:req.body.category,
        description:req.body.description,
        status:req.body.status,
        id:req.body.id,
        image:image_filename
    })
    try {
        await product.save();
        res.json({success:true, message:"Product Added successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

// all products list
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true, data:products})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

//remove product item
const removeProduct = async(req,res) => {
    try {
        const product = await productModel.findById(req.body.id);
        fs.unlink(`uploads/${product.image}`,()=>{})

        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Product removed successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

const editProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const updatedProduct = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            status: req.body.status
        };

        if (req.file) {
            const product = await productModel.findById(productId);
            fs.unlink(`uploads/${product.image}`, () => {});
            updatedProduct.image = req.file.filename;
        }

        const product = await productModel.findByIdAndUpdate(productId, updatedProduct, { new: true });
        res.json({ success: true, message: "Product updated successfully", data: product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error updating product" });
    }
};

export {addProduct,listProducts,editProduct,removeProduct}

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
