import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Fetch all users
const getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching users' });
    }
};

//login user
const loginUser = async(req,res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email})

        if(!user) {
            return res.json({success:false, message:"User Doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch) {
            return res.json({success:false, message:"Invalid credentials"})
        }

        const token = createToken(user._id);
        return res.json({success:true, token})

    } catch (error) {
        console.error(error)
        res.json({success:false, message:"Error"})
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser = async(req,res) => {
    const {name,password,email} = req.body;
    try {
        //checking is user already exists
        const exists = await userModel.findOne({email});
        if(exists) {
            return res.json({success: false, message:"User already exists"})
        }
        // validating email format & strong 
        if(!validator.isEmail(email)){
            return res.json({success: false, message:"Please enter a valid email"})
        }

        if(password.length < 8) {
            return res.json({success:false,message:"Please enter a strong password"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name: name,
            email:email,
            password:  hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    } 
}

// Add user
const addUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        res.json({ success: true, user });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Edit user
const editUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const user = await userModel.findById(id);
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        if (name) user.name = name;
        if (email) {
            if (!validator.isEmail(email)) {
                return res.json({ success: false, message: "Please enter a valid email" });
            }
            user.email = email;
        }

        await user.save();
        res.json({ success: true, user });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Delete user
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.findById(id);
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        await userModel.deleteOne({ _id: id });
        res.json({ success: true, message: "User deleted" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};



export {getUsers, loginUser, registerUser,addUser,editUser,deleteUser}