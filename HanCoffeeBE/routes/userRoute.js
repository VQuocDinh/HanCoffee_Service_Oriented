import express from 'express';
import {addUser, deleteUser, editUser, getUsers, loginUser, registerUser} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/', getUsers); // Fetch all users
userRouter.post('/login', loginUser); // Login user
userRouter.post('/register', registerUser); // Register user
userRouter.post('/', addUser); // Add user
userRouter.put('/:id', editUser); // Edit user
userRouter.delete('/:id', deleteUser); // Delete user

export default userRouter;