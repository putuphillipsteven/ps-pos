import { PrismaClient } from '@prisma/client';

export interface TransactionDetailsProps {
	transaction_id: number;
	product_id: number;
	qty: number;
	total_price: number;
	cart_id?: number;
}

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
	prisma: PrismaClient;

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
		} catch (err) {
			throw err;
		}
	}
}
