import {
	GetTransactionFilters,
	ITranscationInteractor,
} from '../interfaces/i.transaction.interactor';

export class TransactionController {
	private interactor: ITranscationInteractor;
	constructor(interactor: ITranscationInteractor) {
		this.interactor = interactor;
	}

	async onCreateTransaction(filter: GetTransactionFilters) {
		try {
			const transaction = await this.interactor.get(filter);
			return transaction;
		} catch (error) {
			throw error;
		}
	}

	async onGetTransaction(filter: GetTransactionFilters) {
		try {
			const res = await this.interactor.get(filter);
			return res;
		} catch (error) {
			throw error;
		}
	}
}
