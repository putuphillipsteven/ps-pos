import { Transaction } from '../entities/transaction';

export interface CreateTransactionProps {
	user_id: number;
	total_price: number;
	total_qty: number;
	payment_method_id: number;
	payment_amount: number;
	customer_name: string;
	payment_change: number;
	total_price_ppn: number;
}

export interface GetTransactionReturnProps {
	total: string;
	data: Transaction[];
}

export interface GetTransactionFilters {
	startDate: string;
	endDate: string;
	page: string;
	pageSize: string;
}

export interface ITranscationInteractor {
	create(input: CreateTransactionProps): Promise<Transaction | undefined>;
	get(input: GetTransactionFilters): Promise<GetTransactionReturnProps | undefined>;
}
