import { PrismaClient } from '@prisma/client';

import { Transaction } from '../entities/transaction';
import { ITransactionRepository } from '../interfaces/transaction/i.transaction.repository';
import {
	CreateTransactionWithDetailsProps,
	GetTransactionFilters,
	GetTransactionReturnProps,
} from '../interfaces/transaction/i.transaction';

export class TransactionRepository implements ITransactionRepository {
	private prisma: PrismaClient;
	constructor() {
		this.prisma = new PrismaClient();
	}
	updateTransaction(): Promise<Transaction | undefined> {
		throw new Error('Method not implemented.');
	}
	deleteTransaction(): Promise<Transaction | undefined> {
		throw new Error('Method not implemented.');
	}

	async getTransactions(
		args: GetTransactionFilters,
	): Promise<GetTransactionReturnProps | undefined> {
		try {
			// Define skip and take for pagination
			const skip = (Number(args.page) - 1) * +args.pageSize;
			const take = Number(args.pageSize);

			// Make todays date for default date
			const today = new Date();
			/* 
			Make default start date, if the date is null, so the default
			start date is those, also the default endD date.
			The default end date is + 1 day from default start date
			(todays) date
			*/
			const defaultStartDate = new Date(today);
			const defaultEndDate = new Date(today);
			defaultEndDate.setDate(today.getDate() + 1);

			// Define a new filter for more readable
			const newFilter = {
				skip,
				take,
				where: {},
			};

			// Make readable new include, nothing special
			const newInclude = {
				include: {
					user: {
						select: {
							password: false,
							full_name: true,
							email: true,
							branch: {
								select: { branch_name: true },
							},
							gender: {
								select: { gender_name: true },
							},
						},
					},
					payment_method: true,
					transaction_detail: true,
				},
			};

			// Filter for the total data that we want to return
			const totalFilter = {
				where: {},
			};

			/* 
			Condition if the payment_method_is is given
			*/
			if (args.payment_method_id) {
				newFilter.where = {
					payment_method_id: { equals: Number(args.payment_method_id) },
				};
			}
			/* 
			The condition if the args.start and endDate is given
			*/
			if (args.startDate) {
				newFilter.where = { date: { gt: new Date(args.startDate) } };
				totalFilter.where = { date: { gt: new Date(args.startDate) } };
			}
			if (args.endDate) {
				newFilter.where = { date: { lt: new Date(args.endDate) } };
				totalFilter.where = { date: { lt: new Date(args.endDate) } };
			}
			const total = await this.prisma.transaction.count({ ...totalFilter });
			const data = await this.prisma.transaction.findMany({
				...newFilter,
				...newInclude,
			});

			return {
				total,
				data,
			};
		} catch (error) {
			throw error;
		}
	}
	createTransaction(args: CreateTransactionWithDetailsProps): Promise<Transaction | undefined> {
		throw new Error('Method not implemented.');
	}
}