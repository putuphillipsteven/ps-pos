import {
  createTransactionQuery,
  findTransactionQuery,
  getAllTransactionQuery,
  updateTransactionQuery,
  groupTransactionByDateQuery,
} from "../query/transactionQuery";

export const createTransactionService = async (
  user_id: number,
  total_price: number,
  total_qty: number,
  payment_method_id: number,
  payment_amount: number,
  customer_name: string,
  payment_change: number,
  total_price_ppn: number
) => {
  try {
    const res = await createTransactionQuery(
      user_id,
      total_price,
      total_qty,
      payment_method_id,
      payment_amount,
      customer_name,
      (payment_change = payment_amount - total_price),
      total_price_ppn
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const findTransactionService = async (
  id: number
) => {
  try {
    const res = await findTransactionQuery(id);
    return res;
  } catch (err) {
    throw err;
  }
};

export const getAllTransactionService = async (
  page: number,
  pageSize: number,
  startDate: string,
  endDate: string
) => {
  try {
    const res = await getAllTransactionQuery(
      page,
      pageSize,
      startDate,
      endDate
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const updateTransactionService = async (
  id: number,
  user_id: number,
  date: string,
  total_price: number,
  total_qty: number,
  payment_method_id: number,
  payment_amount: number,
  payment_change: number
) => {
  try {
    const res = await updateTransactionQuery(
      id,
      user_id,
      date,
      total_price,
      total_qty,
      payment_method_id,
      payment_amount,
      payment_change
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const groupTransactionByDateService = async () => {
  try {
    const res = await groupTransactionByDateQuery();
    return res;
  } catch (err) {
    throw err;
  }
};
