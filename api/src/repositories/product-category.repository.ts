import { PrismaClient, Product_Category } from '@prisma/client';
import {
	GetProductCategoryReturnProps,
	CreateProductCategoryProps,
	UpdateProductCategoryProps,
	DeleteProductCategoryProps,
} from '../interfaces/product-category/i.product-category';
import { IProductCategoryRepository } from '../interfaces/product-category/i.product-category.repository';
import { ProductCategory } from '../entities/product-category';

export class ProductCategoryRepository implements IProductCategoryRepository {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}
	async getProductCategory(): Promise<GetProductCategoryReturnProps | undefined> {
		try {
			const results = await this.prisma.product_Category.findMany({
				include: {
					parent: true,
				},
			});

			// Fix typo and properly initialize the accumulator (result)
			const groupedCategories = results.reduce((result: any, item) => {
				const parentName = item?.parent?.product_category_name;
				const parentId = item?.parent?.id;

				if (parentName && !result[parentName]) {
					result[parentName] = { name: parentName, id: parentId, category: [] };
				}

				if (parentName) {
					result[parentName].category.push({ id: item.id, name: item.product_category_name });
				}
				return result;
			}, {});

			// Return data correctly
			return {
				data: Object.values(groupedCategories), // Convert object to array of grouped categories
			};
		} catch (error) {
			throw error;
		}
	}
	async createProductCategory(
		args: CreateProductCategoryProps,
	): Promise<ProductCategory | undefined> {
		try {
			const res = await this.prisma.product_Category.create({ data: args });
			return res;
		} catch (error) {
			throw error;
		}
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
