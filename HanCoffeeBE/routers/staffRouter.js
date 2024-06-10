import express from 'express';
import {listStaff } from '../controllers/staffController.js';

const staffRouter = express.Router();


staffRouter.get('/', listStaff);


export default staffRouter;