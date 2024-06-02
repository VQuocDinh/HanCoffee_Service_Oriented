import express from 'express';
import { addCategory, listCategories } from '../controllers/categoryController.js';
import multer from "multer";

const categoryRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb)=>{
       return cb(null,`${Date.now()}${file.originalname}`) 
    }
})

const upload = multer({storage:storage})

categoryRouter.post("/add",upload.single("image"), addCategory)
categoryRouter.get("/list",listCategories)

export default categoryRouter;