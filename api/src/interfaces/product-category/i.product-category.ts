import { Product_Category } from '@prisma/client';

export interface CreateProductCategoryProps extends Product_Category {}

export interface DeleteProductCategoryProps {
	id: number;
}

export interface UpdateProductCategoryProps {
	id: number;
	product_category_name: string;
}

export interface GetProductCategoryReturnProps {
	data: Product_Category[];
}
