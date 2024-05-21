import express from 'express'
import { categoryList } from '../controllers/categoryController.js'
const categoryRouter = express.Router()
categoryRouter.get("list", categoryList)
export default categoryRouter