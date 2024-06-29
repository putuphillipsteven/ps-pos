import { PrismaClient } from '@prisma/client';
import { CreateProductProps } from '../interfaces/i.product.interactor';
import { IProductRepository } from '../interfaces/i.product.repository';

export class ProductRepository implements IProductRepository {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	async createProduct(input: CreateProductProps) {
		try {
			const product = await this.prisma.product.create({ data: input });
			return product;
		} catch (error) {
			throw error;
		}
	}
}
