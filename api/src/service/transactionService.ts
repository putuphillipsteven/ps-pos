// import { PrismaClient } from '@prisma/client';
// import {
// 	createTransactionQuery,
// 	findTransactionQuery,
// 	getAllTransactionQuery,
// 	updateTransactionQuery,
// 	groupTransactionByDateQuery,
// 	TransactionDetail,
// } from '../query/transactionQuery';

import { TransactionProps, TransactionQuery } from '../query/transactionQuery';

// const prisma = new PrismaClient();

// export const createTransactionService = async (
// 	user_id: number,
// 	total_price: number,
// 	total_qty: number,
// 	payment_method_id: number,
// 	payment_amount: number,
// 	customer_name: string,
// 	payment_change: number,
// 	total_price_ppn: number,
// 	transaction_details: TransactionDetail[],
// ) => {
// 	try {
// 		const res = await createTransactionQuery(
// 			user_id,
// 			total_price,
// 			total_qty,
// 			payment_method_id,
// 			payment_amount,
// 			customer_name,
// 			(payment_change = payment_amount - total_price),
// 			total_price_ppn,
// 		);
// 		const transaction_id = res?.id;
// 		const dataWithTransactionId = transaction_details.map((item) => ({
// 			...item,
// 			transaction_id: transaction_id,
// 		}));
// 		const transactionDetails = await prisma.transaction_Detail.createMany({
// 			data: dataWithTransactionId,
// 		});
// 		console.log(['Transaction Details'], transactionDetails);
// 		return res;
// 	} catch (err) {
// 		throw err;
// 	}
// };

// export const findTransactionService = async (id: number) => {
// 	try {
// 		const res = await findTransactionQuery(id);
// 		return res;
// 	} catch (err) {
// 		throw err;
// 	}
// };

// export const getAllTransactionService = async (
// 	page: number,
// 	pageSize: number,
// 	startDate: string,
// 	endDate: string,
// ) => {
// 	try {
// 		const res = await getAllTransactionQuery(page, pageSize, startDate, endDate);
// 		return res;
// 	} catch (err) {
// 		throw err;
// 	}
// };

// export const updateTransactionService = async (
// 	id: number,
// 	user_id: number,
// 	date: string,
// 	total_price: number,
// 	total_qty: number,
// 	payment_method_id: number,
// 	payment_amount: number,
// 	payment_change: number,
// ) => {
// 	try {
// 		const res = await updateTransactionQuery(
// 			id,
// 			user_id,
// 			date,
// 			total_price,
// 			total_qty,
// 			payment_method_id,
// 			payment_amount,
// 			payment_change,
// 		);
// 		return res;
// 	} catch (err) {
// 		throw err;
// 	}
// };

// export const groupTransactionByDateService = async () => {
// 	try {
// 		const res = await groupTransactionByDateQuery();
// 		return res;
// 	} catch (err) {
// 		throw err;
// 	}
// };

export type CreateTransactionService = Omit<
	TransactionProps,
	'date' | 'payment_change' | 'total_price_ppn'
>;

export class TransactionService {
	private transactionQuery: TransactionQuery;

	constructor() {
		this.transactionQuery = new TransactionQuery();
	}

	public async createTransaction(transaction: CreateTransactionService) {
		try {
			const res = await this.transactionQuery.createTransaction({
				customer_name: transaction.customer_name,
				payment_amount: transaction.payment_amount,
				payment_change: transaction.total_price - transaction.payment_amount,
				payment_method_id: transaction.payment_method_id,
				total_price: transaction.total_price,
				total_price_ppn: transaction.total_price + transaction.total_price * 0.1,
				total_qty: transaction.total_qty,
				user_id: transaction.user_id,
			});
			return res;
		} catch (err) {
			throw err;
		}
	}
}
