import express from 'express';
const router = express.Router();
import { uploadProductFile } from '../middleware/multer';
import { ProductController } from '../controller/productController';

const productController = new ProductController();
// router.get("/", getAllProductController);
// router.get("/find/filter", findProductController);
// router.get("/:id", getProductController);
router.post('/create', uploadProductFile, productController.createProduct);
// router.patch(
//   "/:id",
//   uploadProductFile,
//   updateProductController
// );

export = router;
