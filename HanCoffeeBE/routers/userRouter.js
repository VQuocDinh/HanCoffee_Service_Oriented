import express from 'express';
import { authUser, getUsers, registerUser, updateUserRole } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.put('/:id',updateUserRole);
userRouter.post('/register',registerUser);
userRouter.post('/login',authUser);

export default userRouter;
