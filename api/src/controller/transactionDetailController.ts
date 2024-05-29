import {
  createTransactionDetailService,
  getAllTransactionDetailService,
  getTransactionDetailQueryByTransactionIdService,
} from "../service/transactionDetailService";
import { Request, Response } from "express";

export const createTransactionDetailController = async (
  req: Request,
  res: Response
) => {
  try {
    const { transaction_id, product_id, qty, total_price, cart_id } = req.body;

    const result = await createTransactionDetailService(
      transaction_id,
      product_id,
      qty,
      total_price,
      cart_id
    );
    return res.status(200).json({
      message: "Create Transaction Detail Succes",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

export const getAllTransactionDetailController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getAllTransactionDetailService();
    return res.status(200).json({
      message: "Get All Transaction Detail Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

export const getTransactionDetailQueryByTransactionIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { transaction_id } = req.query;
    const result = await getTransactionDetailQueryByTransactionIdService(
      Number(transaction_id)
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};
