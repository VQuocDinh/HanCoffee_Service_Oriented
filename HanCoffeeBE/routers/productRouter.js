import express from 'express'
import {productList} from '../controllers/productController.js'
import multer from 'multer'

const productRouter = express.Router();

productRouter.get("/list", productList)

export default productRouter