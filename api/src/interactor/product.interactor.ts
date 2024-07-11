import { Product } from '../entities/product';
import {
	CreateProductProps,
	DeleteProductProps,
	DeleteProductReturnProps,
	GetProductFilterProps,
	GetProductReturnProps,
	IProductInteractor,
	UpdateProductProps,
} from '../interfaces/i.product.interactor';
import { IProductRepository } from '../interfaces/i.product.repository';

export class ProductInteractor implements IProductInteractor {
	private repository: IProductRepository;

	constructor(repository: IProductRepository) {
		this.repository = repository;
	}
	async delete(args: DeleteProductProps): Promise<Product | undefined> {
		try {
			const res = await this.repository.deleteProduct(args);
			return res;
		} catch (error) {
			throw error;
		}
	}
	async get(args: GetProductFilterProps): Promise<GetProductReturnProps | undefined> {
		try {
			const products = await this.repository.getProduct(args);
			return products;
		} catch (error) {
			throw error;
		}
	}

	async update(args: UpdateProductProps): Promise<Product | undefined> {
		try {
			const product = await this.repository.updateProduct(args);
			return product;
		} catch (error) {
			throw error;
		}
	}

	async create(args: CreateProductProps): Promise<Product | undefined> {
		try {
			const product = await this.repository.createProduct(args);
			return product;
		} catch (error) {
			throw error;
		}
	}
}
