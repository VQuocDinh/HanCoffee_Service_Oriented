import express from 'express'
import { addToCart, removeFromCart } from '../controllers/cartController';
const cartRouter = express.Router();

cartRouter.post("/add", addToCart)
cartRouter.post("remove", removeFromCart)

export default cartRouter