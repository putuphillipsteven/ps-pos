import { Transaction } from '../entities/transaction';
import {
	CreateTransactionProps,
	GetTransactionFilters,
	ITranscationInteractor,
} from '../interfaces/i.transaction.interactor';
import { ITransactionRepository } from '../interfaces/i.transaction.repository';

export class TransactionInteractor implements ITranscationInteractor {
	private repository: ITransactionRepository;

	constructor(repository: ITransactionRepository) {
		this.repository = repository;
	}
	async get(filter: GetTransactionFilters): Promise<Transaction[] | undefined> {
		const transaction = await this.repository.getTransaction(filter);
		return transaction;
	}
	create(input: CreateTransactionProps): Promise<Transaction | undefined> {
		throw new Error('Method not implemented.');
	}
}
