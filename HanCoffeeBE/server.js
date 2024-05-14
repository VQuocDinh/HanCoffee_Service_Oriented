import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'

// app connfig
const app = express()
const port = 8888

//middelware
app.use(express.json())
app.use(cors())

//db connect
connectDB();

// app router
app.get("/", (req,res)=> {
    res.send("API")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

