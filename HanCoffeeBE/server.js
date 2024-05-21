import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import productRouter from './routers/productRouter.js'
import categoryRouter from './routers/categoryRouter.js'

// app connfig
const app = express()
const port = 8888

//middelware
app.use(express.json())
app.use(cors())

//db connect
connectDB();

// api endpoints
app.use("/api/product", productRouter)
app.use("/api/category", categoryRouter)
app.use("/images", express.static('uploads'))


// app router
app.get("/", (req,res)=> {
    res.send("Initial Success")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

