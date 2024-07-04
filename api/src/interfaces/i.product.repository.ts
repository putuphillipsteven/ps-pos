import { PrismaClient } from '@prisma/client';
import { Product } from '../entities/product';
import { CreateProductProps, UpdateProductProps } from './i.product.interactor';

export interface IProductRepository {
	createProduct(args: CreateProductProps): Promise<Product | undefined>;
	updateProduct(args: UpdateProductProps): Promise<Product | undefined>;
}
