import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import 'dotenv/config'
import categoryRouter from './routes/categoryRoute.js'
import productRouter from './routers/productRouter.js'
import categoryRouter from './routers/categoryRouter.js'
import cartItemsRouter from './routers/cartItemsRouter.js'

// app connfig
const app = express()
const port = 8888

//middelware
app.use(express.json())
app.use(cors())

//db connect
connectDB();

//api endpoints
app.use("/api/product",productRouter)
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/category",categoryRouter)
app.use("/api/cartItem", cartItemsRouter)
app.use("/images", express.static('uploads'))


// app router
app.get("/", (req,res)=> {
    res.send("Initial Success")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

