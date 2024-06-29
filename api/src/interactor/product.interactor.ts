import { Product } from '../entities/product';
import { CreateProductProps, IProductInteractor } from '../interfaces/i.product.interactor';
import { IProductRepository } from '../interfaces/i.product.repository';

export class ProductInteractor implements IProductInteractor {
	private repository: IProductRepository;

	constructor(repository: IProductRepository) {
		this.repository = repository;
	}
	async create(input: CreateProductProps): Promise<Product | undefined> {
		try {
			const data = await this.repository.createProduct(input);
			return data;
		} catch (error) {}
	}
}
