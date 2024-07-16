import {
	CreateTransactionProps,
	GetTransactionFilters,
	GetTransactionReturnProps,
} from './i.transaction.interactor';

export interface ITransactionRepository {
	createTransaction(input: CreateTransactionProps): any;
	getTransaction(filter: GetTransactionFilters): Promise<GetTransactionReturnProps | undefined>;
}
