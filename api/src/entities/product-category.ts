import { Product_Category as PrismaProductCategory } from '@prisma/client';

export class Product_Category implements PrismaProductCategory {
	constructor(
		public id: number,
		public product_category_name: string,
	) {}
}
