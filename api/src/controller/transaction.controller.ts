import { NextFunction, Request, Response } from 'express';
import { IProductInteractor } from '../interfaces/product/i.product.interactor';
import {
	GetTransactionFilters,
	ITransactionInteractor,
} from '../interfaces/transaction/i.transaction.interactor';
import { ParsedQs } from 'qs';
import { sendResponse } from '../utils/utilts';
export class TransactionController {
	private interactor: ITransactionInteractor;
	constructor(interactor: ITransactionInteractor) {
		this.interactor = interactor;
	}

	async onGetTransactions(req: Request, res: Response, next: NextFunction) {
		try {
			const { endDate, page, pageSize, startDate, payment_method_id } = req.query as ParsedQs &
				GetTransactionFilters;
			const filters: GetTransactionFilters = {
				startDate,
				endDate,
				page,
				pageSize,
				payment_method_id,
			};
			const result = await this.interactor.get(filters);
			sendResponse(res, 200, 'Get Transaction Success', result);
		} catch (error) {
			next(error);
		}
	}
}
