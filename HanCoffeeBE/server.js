import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import productRouter from './routers/productRouter.js'
import userRouter from './routers/userRouter.js'
import 'dotenv/config'
import categoryRouter from './routers/categoryRouter.js'
import cartItemsRouter from './routers/cartItemsRouter.js'
import staffRouter from './routers/staffRouter.js'
import User from './models/userModel.js'
import customerRouter from './routers/customerRouter.js'

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
app.use("/api/category",categoryRouter)
app.use("/api/cartItem", cartItemsRouter)
app.use("/api/staff", staffRouter)
app.use("/api/customer", customerRouter)
app.use("/images", express.static('uploads'))

app.post('/api/user/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
            res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
// Register route
app.post('/api/user/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = new User({ email, password: hashedPassword, role: 2});
        await user.save();

        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(201).json({ token, message: 'Đăng ký thành công'});
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Server error' });
    }
});


// app router
app.get("/", (req,res)=> {
    res.send("Initial Success")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

