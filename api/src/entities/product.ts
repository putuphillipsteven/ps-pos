import { Product as PrismaProduct } from '@prisma/client';

export class Product implements PrismaProduct {
	constructor(
		public id: number,
		public product_name: string,
		public product_group_id: number,
		public product_price: number,
		public product_image: string,
		public product_description: string | null,
		public product_status_id: number,
		public product_category_id: number,
	) {}
}
