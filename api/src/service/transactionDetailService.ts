import {
  createtransactionDetailQuery,
  getAllTransactionDetailQuery,
  getTransactionDetailQueryByTransactionIdQuery,
} from "../query/transactionDetailQuery";

export const createTransactionDetailService = async (
  transaction_id: number,
  product_id: number,
  qty: number,
  total_price: number,
  cart_id: number
) => {
  try {
    const res = await createtransactionDetailQuery(
      transaction_id,
      product_id,
      qty,
      total_price,
      cart_id
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const getAllTransactionDetailService = async () => {
  try {
    const res = await getAllTransactionDetailQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

export const getTransactionDetailQueryByTransactionIdService =
  async (transaction_id: number) => {
    try {
      const res =
        await getTransactionDetailQueryByTransactionIdQuery(
          transaction_id
        );
      return res;
    } catch (err) {
      throw err;
    }
  };
