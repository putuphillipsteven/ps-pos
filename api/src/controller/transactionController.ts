import { NextFunction, Request, Response } from 'express';
import {
	CreateTransactionService,
	CreateTransactionServiceWithDetails,
	TransactionService,
} from '../service/transactionService';
import { sendResponse } from '../utils/utilts';

export class TransactionController {
	private transactionService: TransactionService;

	constructor() {
		this.transactionService = new TransactionService();
		this.createTransaction = this.createTransaction.bind(this);
		this.getTransaction = this.getTransaction.bind(this);
	}

	public async createTransaction(req: Request, res: Response, next: NextFunction) {
		const {
			user_id,
			total_price,
			total_qty,
			payment_method_id,
			payment_amount,
			customer_name,
			details,
		}: CreateTransactionServiceWithDetails = req.body;
		try {
			const result = await this.transactionService.createTransaction({
				customer_name,
				payment_amount,
				payment_method_id,
				total_price,
				total_qty,
				user_id,
				details,
			});
			sendResponse(res, 200, 'Create Transaction Success', result);
		} catch (err) {
			console.error(err);
			next(err);
		}
	}

	public async getTransaction(req: Request, res: Response, next: NextFunction) {
		try {
			const result = await this.transactionService.getTransaction({});
			sendResponse(res, 200, 'Get Transaction Success', result);
		} catch (err) {
			next(err);
		}
	}
}
