import express from 'express'
import { addToCart } from '../controllers/cartIitemsController.js'
const cartItemsRouter = express.Router()
cartItemsRouter.post("/add", addToCart)
export default cartItemsRouter