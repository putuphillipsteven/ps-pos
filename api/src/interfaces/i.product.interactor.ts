import { Product } from '../entities/product';

export interface CreateProductProps {
	product_name: string;
	product_group_id: number;
	product_category_id: number;
	product_price: number;
	product_image: string;
	product_description: string;
	product_status_id: number;
}

export interface UpdateProductProps extends CreateProductProps {
	id: number;
}

export interface GetProductFilterProps {
	product_name: string;
	product_category_id: number;
	branch_id: number;
	pageSize: number;
	page: number;
	sort: string;
	stock: number;
}

export interface IProductInteractor {
	create(input: CreateProductProps): Promise<Product | undefined>;
}
