import { NextFunction, Request, Response } from 'express';
import { IProductInteractor } from '../interfaces/i.product.interactor';
import { sendResponse } from '../utils/utilts';

export class ProductController {
	private interactor: IProductInteractor;

	constructor(interactor: IProductInteractor) {
		this.interactor = interactor;
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

			sendResponse(res, 200, 'Create Product Success', data);
		} catch (error) {
			next(error);
		}
	}
}
