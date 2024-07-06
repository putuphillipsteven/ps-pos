import { NextFunction, Request, Response } from 'express';
import {
	GetProductFilterProps,
	IProductInteractor,
	UpdateProductProps,
} from '../interfaces/i.product.interactor';
import { sendResponse } from '../utils/utilts';
import { ParsedQs } from 'qs';
export class ProductController {
	private interactor: IProductInteractor;

	constructor(interactor: IProductInteractor) {
		this.interactor = interactor;
	}
	async onGetProduct(req: Request, res: Response, next: NextFunction) {
		try {
			const { branch_id, page, pageSize, product_category_id, product_name, sort, stock } =
				req.query as ParsedQs & GetProductFilterProps;
			const filters: GetProductFilterProps = {
				branch_id: Number(branch_id),
				page,
				pageSize,
				product_category_id,
				product_name,
				sort,
				stock: Number(stock),
			};
			const result = await this.interactor.get(filters);
			sendResponse(res, 200, 'Get Product Success', result);
		} catch (error) {
			next(error);
		}
	}

	async onUpdateProduct(req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params;
			const {
				product_category_id,
				product_group_id,
				product_price,
				product_status_id,
				product_image,
			} = req.body as UpdateProductProps;

			const updateData: UpdateProductProps = {
				id: Number(id),
				product_category_id: Number(product_category_id),
				product_group_id: Number(product_group_id),
				product_price: Number(product_price),
				product_status_id: Number(product_status_id),
				product_image: req?.file?.filename || product_image,
				...req.body,
			};

			const result = await this.interactor.update(updateData);
			sendResponse(res, 200, 'Update Product Success', result);
		} catch (error) {
			next(error);
		}
	}

	async onCreateProduct(req: Request, res: Response, next: NextFunction) {
		try {
			const { product_price, product_category_id, product_group_id, product_status_id } = req.body;

			const data = await this.interactor.create({
				...req.body,
				product_price: Number(product_price),
				product_category_id: Number(product_category_id),
				product_group_id: Number(product_group_id),
				product_status_id: Number(product_status_id),
				product_image: req?.file?.filename,
			});

			return sendResponse(res, 200, 'Create Product Success', data);
		} catch (error) {
			next(error);
		}
	}
}
