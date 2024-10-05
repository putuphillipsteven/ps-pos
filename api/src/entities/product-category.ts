import { Product_Category as PrismaProductCategory } from '@prisma/client';

export class ProductCategory implements PrismaProductCategory {
	constructor(
		public id: number,
		public product_category_name: string,
		public parent_id: number | null,
	) {}
}
