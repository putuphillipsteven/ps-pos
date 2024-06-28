import express from 'express';
const router = express.Router();
import { uploadProductFile } from '../middleware/multer';
import { ProductController } from '../controller/productController';

const productController = new ProductController();
// router.get("/find/filter", findProductController);
// router.get("/:id", getProductController);
router.get('/products', productController.getProduct);
router.post('/create', uploadProductFile, productController.createProduct);
router.patch('/update/:id', uploadProductFile, productController.updateProduct);

export = router;
