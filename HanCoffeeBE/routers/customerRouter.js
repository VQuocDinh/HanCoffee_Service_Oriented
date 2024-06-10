import express from 'express';
import { listCustomer } from '../controllers/customerController.js';

const customerRouter = express.Router();


customerRouter.get('/', listCustomer);


export default customerRouter;