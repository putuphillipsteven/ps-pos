import { Transaction } from '../../entities/transaction';
import {
	CreateTransactionWithDetailsProps,
	GetTransactionFilters,
} from './i.transaction.interactor';

export interface ITransactionRepository {
	getTransactions(args: GetTransactionFilters): Promise<Transaction[] | undefined>;
	createTransaction(args: CreateTransactionWithDetailsProps): Promise<Transaction | undefined>;
	updateTransaction(): Promise<Transaction | undefined>;
	deleteTransaction(): Promise<Transaction | undefined>;
}
