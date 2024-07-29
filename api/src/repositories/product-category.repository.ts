import { PrismaClient, Product_Category } from '@prisma/client';
import {
	GetProductCategoryReturnProps,
	CreateProductCategoryProps,
	UpdateProductCategoryProps,
	DeleteProductCategoryProps,
} from '../interfaces/product-category/i.product-category';
import { IProductCategoryRepository } from '../interfaces/product-category/i.product-category.repository';

export class ProductCategoryRepository implements IProductCategoryRepository {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}
	async getProductCategory(): Promise<GetProductCategoryReturnProps | undefined> {
		try {
			const res = await this.prisma.product_Category.findMany();
			return {
				data: res,
			};
		} catch (error) {
			throw error;
		}
	}
	async createProductCategory(
		args: CreateProductCategoryProps,
	): Promise<Product_Category | undefined> {
		throw new Error('Method not implemented.');
	}
	async updateProductCategory(
		args: UpdateProductCategoryProps,
	): Promise<Product_Category | undefined> {
		throw new Error('Method not implemented.');
	}
	async deleteProductCategory(
		args: DeleteProductCategoryProps,
	): Promise<Product_Category | undefined> {
		throw new Error('Method not implemented.');
	}
}
