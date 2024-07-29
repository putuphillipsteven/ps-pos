import axios from 'axios';
import {
	CreateTransactionProps,
	GetTransactionFilters,
} from '../interfaces/i.transaction.interactor';
import { ITransactionRepository } from '../interfaces/i.transaction.repository';

export class TransactionRepository implements ITransactionRepository {
	async getTransaction(filter: GetTransactionFilters) {
		const { endDate, page, pageSize, startDate } = filter;
		const res = await axios.get(
			`${import.meta.env.VITE_APP_API_URL}/transaction?page=${page}&pageSize=${pageSize}&startDate=${startDate}&endDate=${endDate}`,
		);
		return res?.data?.data?.data;
	}
	createTransaction(input: CreateTransactionProps) {
		throw new Error('Method not implemented.');
	}
}
