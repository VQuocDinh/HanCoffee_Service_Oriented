import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        enum: [0, 1, 2],
        default: 2,
    },
    cartdata: {
        type: Object,
        default: {},
    },
    name: {
        type: String,
        default: '',
    },
    phone: {
        type: String,
        default: '',
    },
    address: {
        type: String,
        default: '',
    },
    AI: {
        type: String,
        default: '',
    },
    cartData:{type:Object,default:{}}

}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;