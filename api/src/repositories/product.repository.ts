import { PrismaClient } from '@prisma/client';
import { CreateProductProps, UpdateProductProps } from '../interfaces/i.product.interactor';
import { IProductRepository } from '../interfaces/i.product.repository';
import { Product } from '../entities/product';

export class ProductRepository implements IProductRepository {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	async updateProduct(args: UpdateProductProps): Promise<Product | undefined> {
		try {
			const argsToUpdate: any = {};

			if (args.product_name) argsToUpdate.product_name = args.product_name;
			if (args.product_price) argsToUpdate.product_price = Number(args.product_price);
			if (args.product_category_id)
				argsToUpdate.product_category_id = Number(args.product_category_id);
			if (args.product_image) argsToUpdate.product_image = args.product_image;
			if (args.product_description) argsToUpdate.product_description = args.product_description;
			if (args.product_group_id) argsToUpdate.product_group_id = Number(args.product_group_id);
			if (args.product_status_id) argsToUpdate.product_status_id = Number(args.product_status_id);

			const res = await this.prisma.product.update({
				where: { id: args.id },
				data: { ...argsToUpdate },
			});
			return res;
		} catch (error) {
			throw error;
		}
	}

	async createProduct(args: CreateProductProps): Promise<Product | undefined> {
		try {
			const product = await this.prisma.product.create({ data: args });
			return product;
		} catch (error) {
			throw error;
		}
	}
}
