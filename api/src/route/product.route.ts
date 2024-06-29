import express, { NextFunction, Request, Response } from 'express';
import { ProductController } from '../controller/product.controller';
import { ProductInteractor } from '../interactor/product.interactor';
import { ProductRepository } from '../repositories/product.repository';
import { uploadProductFile } from '../middleware/multer';
import { body } from 'express-validator';
import { validator } from '../middleware/validator';

const repository = new ProductRepository();
const interactor = new ProductInteractor(repository);
const controller = new ProductController(interactor);

const router = express.Router();
const createUserValidations = [
	body('product_name').notEmpty().withMessage('Product name cant be empty'),
	body('product_group_id').notEmpty().withMessage('Product group cant be empty'),
	body('product_category_id').notEmpty().withMessage('Product category cant be empty'),
	body('product_price').isInt({ min: 0 }).withMessage('Product price cant less than zero'),
	body('product_status_id').notEmpty().withMessage('Product status cant be empty'),
];
router.post(
	'/create',
	uploadProductFile,
	validator(createUserValidations),
	controller.onCreateProduct.bind(controller),
);

export = router;
