import { PrismaClient } from '@prisma/client';
import { Product } from '../entities/product';
import {
	CreateProductProps,
	GetProductFilterProps,
	GetProductReturnProps,
	UpdateProductProps,
} from './i.product.interactor';

export interface IProductRepository {
	createProduct(args: CreateProductProps): Promise<Product | undefined>;
	updateProduct(args: UpdateProductProps): Promise<Product | undefined>;
	getProduct(args: GetProductFilterProps): Promise<GetProductReturnProps | undefined>;
}
