import {
  getProductController,
  getAllProductController,
  findProductController,
  createProductController,
  updateProductController,
} from "../controller/productController";
import express from "express";
const router = express.Router();
import { uploadProductFile } from "../middleware/multer";

router.get("/", getAllProductController);
router.get("/find/filter", findProductController);
router.get("/:id", getProductController);
router.post(
  "/",
  uploadProductFile,
  createProductController
);
router.patch(
  "/:id",
  uploadProductFile,
  updateProductController
);

export = router;
