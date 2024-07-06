import express, { NextFunction, Request, Response } from 'express';
import { ProductController } from '../controller/product.controller';
import { ProductInteractor } from '../interactor/product.interactor';
import { ProductRepository } from '../repositories/product.repository';
import { uploadProductFile } from '../middleware/multer';
import { body } from 'express-validator';
import { validator } from '../middleware/validator';
import { getAllProductController } from '../controller/productController';

const repository = new ProductRepository();
const interactor = new ProductInteractor(repository);
const controller = new ProductController(interactor);

const router = express.Router();

const createProductValidations = [
	body('product_name').notEmpty().withMessage('Product name cant be empty'),
	body('product_group_id').notEmpty().withMessage('Product group cant be empty'),
	body('product_category_id').notEmpty().withMessage('Product category cant be empty'),
	body('product_price').isInt({ min: 100 }).withMessage('Product price cant 100 rupiah'),
	body('product_status_id').notEmpty().withMessage('Product status cant be empty'),
];

const updateProductValidations = [
	body('product_price').isInt({ min: 100 }).withMessage('Product price cant 100 rupiah'),
];

router.get('/', controller.onGetProduct.bind(controller));
// router.get('/', getAllProductController);
router.post(
	'/create',
	uploadProductFile,
	validator(createProductValidations),
	controller.onCreateProduct.bind(controller),
);
router.patch(
	'/update/:id',
	uploadProductFile,
	validator(updateProductValidations),
	controller.onUpdateProduct.bind(controller),
);

export = router;
