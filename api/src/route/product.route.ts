import express from 'express';
import { ProductController } from '../controller/product.controller';
import { ProductInteractor } from '../interactor/product.interactor';
import { ProductRepository } from '../repositories/product.repository';
import { uploadProductFile } from '../middleware/multer';

const repository = new ProductRepository();
const interactor = new ProductInteractor(repository);
const controller = new ProductController(interactor);

const router = express.Router();

router.post('/create', uploadProductFile, controller.onCreateProduct.bind(controller));

export = router;
