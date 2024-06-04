import express from 'express'
import authMiddleware from '../middleware/auth.js';
import { addToCart, removeFromCart, getCart } from '../controllers/cartIitemsController.js'
const cartItemsRouter = express.Router()
cartItemsRouter.post("/add",authMiddleware,addToCart)
cartItemsRouter.post("/remove",authMiddleware,removeFromCart)
cartItemsRouter.post("/get",authMiddleware,getCart)

export default cartItemsRouter;