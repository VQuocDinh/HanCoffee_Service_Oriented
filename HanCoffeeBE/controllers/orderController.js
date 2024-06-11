import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import stripe, { Stripe } from "stripe"

//  stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const placeOrder = async (req,res) => {
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            totalPrice:req.body.totalPrice,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, {cartData:{}})
        res.json({success:true, message: 'Success'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
   
    }
}

export {placeOrder}