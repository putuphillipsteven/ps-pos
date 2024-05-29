import {
  createTransactionDetailController,
  getAllTransactionDetailController,
  getTransactionDetailQueryByTransactionIdController,
} from "../controller/transactionDetailController";
import express from "express";

const router = express.Router();

router.post("/create", createTransactionDetailController);
router.get("/", getAllTransactionDetailController);
router.get("/find", getTransactionDetailQueryByTransactionIdController);

export = router;
