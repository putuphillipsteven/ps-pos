import {
	TransactionDetailsProps,
	TransactionProps,
	TransactionQuery,
} from '../query/transactionQuery';

export type CreateTransactionService = Omit<
	TransactionProps,
	'date' | 'payment_change' | 'total_price_ppn'
>;

export type CreateTransactionServiceWithDetails = CreateTransactionService & {
	details: TransactionDetailsProps[];
	// Add additional properties as needed
};

export class TransactionService {
	private transactionQuery: TransactionQuery;

	constructor() {
		this.transactionQuery = new TransactionQuery();
	}

	public async createTransaction(transaction: CreateTransactionServiceWithDetails) {
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
			const transaction_id = res?.id;
			const detailsData = transaction.details.map((detail) => {
				return {
					...detail,
					transaction_id,
				};
			});
			await this.transactionQuery.prisma.transaction_Detail.createMany({
				data: detailsData,
			});
			return res;
		} catch (err) {
			throw err;
		}
	}
}
