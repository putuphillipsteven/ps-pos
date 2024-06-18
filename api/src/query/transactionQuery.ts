// import { PrismaClient } from '@prisma/client';

import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export interface TransactionDetail {
// 	product_id: number;
// 	qty: number;
// 	transaction_id: number;
// 	total_price: number;
// }

// export const createTransactionQuery = async (
// 	user_id: number,
// 	total_price: number,
// 	total_qty: number,
// 	payment_method_id: number,
// 	payment_amount: number,
// 	customer_name: string,
// 	payment_change: number,
// 	total_price_ppn: number,
// ): Promise<any> => {
// 	try {
// 		const res = await prisma.transaction.create({
// 			data: {
// 				user_id: user_id,
// 				total_price: total_price,
// 				total_qty: total_qty,
// 				payment_method_id: payment_method_id,
// 				payment_amount: payment_amount,
// 				customer_name: customer_name,
// 				payment_change: payment_change,
// 				total_price_ppn: total_price_ppn,
// 			},
// 		});

// 		return res;
// 	} catch (err) {
// 		throw err;
// 	}
// };

// export const findTransactionQuery = async (id: number) => {
// 	try {
// 		const res = await prisma.transaction.findUnique({
// 			where: {
// 				id: id,
// 			},
// 			include: {
// 				payment_method: true,
// 				transaction_detail: true,
// 				user: true,
// 			},
// 		});
// 		return res;
// 	} catch (err) {
// 		throw err;
// 	}
// };

// export const getAllTransactionQuery = async (
// 	page: number,
// 	pageSize: number,
// 	startDate?: string | null,
// 	endDate?: string | null,
// ) => {
// 	try {
// 		const skip = (page - 1) * pageSize;
// 		const take = pageSize;

// 		// Calculate yesterday and tomorrow dates
// 		const today = new Date();
// 		const yesterday = new Date(today);
// 		yesterday.setDate(today.getDate() - 1);
// 		const tomorrow = new Date(today);
// 		tomorrow.setDate(today.getDate() + 1);

// 		// Use provided startDate and endDate or default to yesterday and tomorrow
// 		const start = startDate && startDate.trim() !== '' ? new Date(startDate) : yesterday;
// 		const end = endDate && endDate.trim() !== '' ? new Date(endDate) : tomorrow;

// 		// Create filter object
// 		const filter = {
// 			skip,
// 			take,
// 			orderBy: {
// 				date: 'desc' as const, // Use 'desc' as a SortOrder
// 			},
// 			where: {
// 				date: {
// 					gte: start,
// 					lte: end,
// 				},
// 			},
// 		};

// 		// Use the filter object in both findMany and count
// 		const [transaction, count] = await prisma.$transaction([
// 			prisma.transaction.findMany(filter),
// 			prisma.transaction.count({
// 				where: filter.where,
// 			}),
// 		]);
// 		return {
// 			pagination: {
// 				total: count,
// 			},
// 			data: transaction,
// 		};
// 	} catch (err) {
// 		throw err;
// 	}
// };

// export const updateTransactionQuery = async (
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
// 		const res = await prisma.transaction.updateMany({
// 			where: {
// 				id: id,
// 			},
// 			data: {
// 				user_id: user_id,
// 				date: date,
// 				total_price: total_price,
// 				total_qty: total_qty,
// 				payment_method_id: payment_method_id,
// 				payment_amount: payment_amount,
// 				payment_change: payment_change,
// 			},
// 		});
// 		return res;
// 	} catch (err) {
// 		throw err;
// 	}
// };

// export const groupTransactionByDateQuery = async () => {
// 	try {
// 		const res =
// 			await prisma.$queryRaw`SELECT DATE_FORMAT(date, '%Y-%m-%d') AS date, AVG(total_price) AS total
//             FROM transaction
//             GROUP BY DATE_FORMAT(date, '%Y-%m-%d')`;
// 		return res;
// 	} catch (err) {
// 		throw err;
// 	}
// };
export interface TransactionProps {
	user_id: number;
	total_price: number;
	total_qty: number;
	payment_method_id: number;
	payment_amount: number;
	customer_name: string;
	payment_change: number;
	total_price_ppn: number;
}

export class TransactionQuery {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	public async createTransaction(transaction: TransactionProps) {
		const {
			customer_name,
			payment_amount,
			payment_change,
			payment_method_id,
			total_price,
			total_price_ppn,
			total_qty,
			user_id,
		} = transaction;
		try {
			const res = await this.prisma.transaction.create({
				data: {
					customer_name,
					payment_amount,
					payment_change,
					payment_method_id,
					total_price,
					total_price_ppn,
					total_qty,
					user_id,
				},
			});
			return res;
		} catch (err) {}
	}
}
