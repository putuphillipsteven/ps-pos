import { TransactionController } from '../controller/transactionController';
import express from 'express';

const transactionController = new TransactionController();
const router = express.Router();
router.get('/', transactionController.getTransaction);
router.post('/create', transactionController.createTransaction);
export = router;
