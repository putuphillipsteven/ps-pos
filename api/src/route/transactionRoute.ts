import {
  createTransactionController,
  findTransactionController,
  getAllTransactionController,
  updateTransactionController,
  groupTransactionByDateController,
} from "../controller/transactionController";
import express from "express";

const router = express.Router();

router.post("/create", createTransactionController);
router.get("/:id", findTransactionController);
router.get("/", getAllTransactionController);
router.get(
  "/filter/bydate",
  groupTransactionByDateController
);
router.patch("/", updateTransactionController);

export = router;
