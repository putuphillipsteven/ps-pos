import { PrismaClient } from '@prisma/client';
import { Product } from '../entities/product';
import { CreateProductProps } from './i.product.interactor';

export interface IProductRepository {
	createProduct(input: CreateProductProps): any;
}
