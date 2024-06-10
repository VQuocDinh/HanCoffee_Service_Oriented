import express from 'express'
import authMiddleware from '../middleware/auth.js';
import { addToCart, removeFromCart, getCart } from '../controllers/cartController.js'
const cartItemsRouter = express.Router()
cartItemsRouter.post("/add",addToCart)
cartItemsRouter.post("/remove",removeFromCart)
cartItemsRouter.get("/get",getCart)

export default cartItemsRouter;