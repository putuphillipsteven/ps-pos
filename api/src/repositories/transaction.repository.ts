import { PrismaClient } from '@prisma/client';
import {
	GetTransactionFilters,
	CreateTransactionWithDetailsProps,
} from '../interfaces/transaction/i.transaction.interactor';
import { ITransactionRepository } from '../interfaces/transaction/i.transaction.repository';
import { Transaction } from '../entities/transaction';

export class TransactionRepository implements ITransactionRepository {
	private prisma: PrismaClient;
	constructor() {
		this.prisma = new PrismaClient();
	}
	async getTransactions(args: GetTransactionFilters): Promise<Transaction[] | undefined> {
		try {
			const res = await this.prisma.transaction.findMany({});
			return res;
		} catch (error) {
			throw error;
		}
	}
	createTransaction(args: CreateTransactionWithDetailsProps): Promise<Transaction | undefined> {
		throw new Error('Method not implemented.');
	}
	updateTransaction(): Promise<Transaction | undefined> {
		throw new Error('Method not implemented.');
	}
	deleteTransaction(): Promise<Transaction | undefined> {
		throw new Error('Method not implemented.');
	}
}
