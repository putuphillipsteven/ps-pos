import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createtransactionDetailQuery = async (
  transaction_id: number,
  product_id: number,
  qty: number,
  total_price: number,
  cart_id: number
) => {
  try {
    const res = await prisma.transaction_Detail.create({
      data: {
        transaction_id,
        product_id,
        qty,
        total_price,
        cart_id,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const getAllTransactionDetailQuery = async () => {
  try {
    const res = await prisma.transaction_Detail.findMany({
      include: {
        product: true,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const getTransactionDetailQueryByTransactionIdQuery = async (
  transaction_id: number
) => {
  try {
    const res = await prisma.transaction_Detail.findMany({
      where: {
        transaction_id: transaction_id,
      },
      include: {
        product: true,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
