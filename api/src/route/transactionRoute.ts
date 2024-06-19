import { TransactionController } from '../controller/transactionController';

const transactionController = new TransactionController();
import express from 'express';
const router = express.Router();
router.post('/create', transactionController.createTransaction);
export = router;
