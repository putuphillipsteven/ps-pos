import { Request, Response } from "express";
import {
  createTransactionService,
  findTransactionService,
  getAllTransactionService,
  updateTransactionService,
  groupTransactionByDateService,
} from "../service/transactionService";

export const createTransactionController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      user_id,
      total_price,
      total_qty,
      payment_method_id,
      payment_amount,
      customer_name,
    } = req.body;

    const result = await createTransactionService(
      user_id,
      total_price,
      total_qty,
      payment_method_id,
      payment_amount,
      customer_name,
      payment_amount - (total_price + total_price * 0.1),
      total_price + total_price * 0.1
    );
    return res.status(200).json({
      message: "Create Transaction Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

export const findTransactionController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const newId = Number(id);
    const result = await findTransactionService(newId);
    return res.status(200).json({
      message: "Find Transaction Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

export const getAllTransactionController = async (
  req: Request,
  res: Response
) => {
  try {
    const { page, pageSize, startDate, endDate } =
      req.query;
    // const newStartDate = new Date(startDate);
    // const newEndDate = new Date(endDate);
    const result = await getAllTransactionService(
      Number(page),
      Number(pageSize),
      String(startDate),
      String(endDate)
    );
    return res.status(200).json({
      message: "Get All Transaction Succes",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

export const updateTransactionController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const newId = Number(id);
    const {
      user_id,
      date,
      total_price,
      total_qty,
      payment_method_id,
      payment_amount,
      payment_change,
    } = req.body;
    const newUser_id = Number(user_id);
    const newTotal_price = Number(total_price);
    const newTotal_qty = Number(total_qty);
    const newPayment_method_id = Number(payment_method_id);
    const newPayment_amount = Number(payment_amount);
    const newPayment_change = Number(payment_change);
    const result = await updateTransactionService(
      newId,
      newUser_id,
      date,
      newTotal_price,
      newTotal_qty,
      newPayment_method_id,
      newPayment_amount,
      newPayment_change
    );
    return res.status(200).json({
      message: "Update Transaction Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

export const groupTransactionByDateController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await groupTransactionByDateService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};
