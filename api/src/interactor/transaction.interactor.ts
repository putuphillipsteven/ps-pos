import { Transaction } from '../entities/transaction';
import {
	CreateTransactionWithDetailsProps,
	GetTransactionFilters,
	ITransactionInteractor,
} from '../interfaces/transaction/i.transaction.interactor';
import { ITransactionRepository } from '../interfaces/transaction/i.transaction.repository';

export class TransactionInteractor implements ITransactionInteractor {
	private repository: ITransactionRepository;
	constructor(repository: ITransactionRepository) {
		this.repository = repository;
	}
	async get(args: GetTransactionFilters): Promise<Transaction[] | undefined> {
		try {
			const res = await this.repository.getTransactions(args);
			return res;
		} catch (error) {
			throw error;
		}
	}
	create(args: CreateTransactionWithDetailsProps): Promise<Transaction | undefined> {
		throw new Error('Method not implemented.');
	}
	update(): Promise<Transaction | undefined> {
		throw new Error('Method not implemented.');
	}
	delete(): Promise<Transaction | undefined> {
		throw new Error('Method not implemented.');
	}
}
