import { CreateTransactionProps, GetTransactionFilters } from './i.transaction.interactor';

export interface ITransactionRepository {
	createTransaction(input: CreateTransactionProps): any;
	getTransaction(filter: GetTransactionFilters): any;
}
