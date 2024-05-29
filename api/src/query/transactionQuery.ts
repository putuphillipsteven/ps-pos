import { PrismaClient } from "@prisma/client";
// import { date } from "yup";

const prisma = new PrismaClient();

export const createTransactionQuery = async (
  user_id: number,
  total_price: number,
  total_qty: number,
  payment_method_id: number,
  payment_amount: number,
  customer_name: string,
  payment_change: number,
  total_price_ppn: number
): Promise<any> => {
  try {
    const res = await prisma.transaction.create({
      data: {
        user_id: user_id,
        total_price: total_price,
        total_qty: total_qty,
        payment_method_id: payment_method_id,
        payment_amount: payment_amount,
        customer_name: customer_name,
        payment_change: payment_change,
        total_price_ppn: total_price_ppn,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const findTransactionQuery = async (id: number) => {
  try {
    const res = await prisma.transaction.findUnique({
      where: {
        id: id,
      },
      include: {
        payment_method: true,
        transaction_detail: true,
        user: true,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const getAllTransactionQuery = async (
  page: number,
  pageSize: number,
  startDate: string,
  endDate: string
) => {
  try {
    const skip = (page - 1) * pageSize;
    const take = pageSize;
    const res = await prisma.transaction.findMany({
      skip,
      take,
      where: {
        date: {
          gte: new Date(`${startDate}`),
          lte: new Date(`${endDate}`),
          // gte: new Date(`2023-11-01`),
          // lte: new Date(`2023-11-30`),
        },
      },
      include: {
        payment_method: true,
        transaction_detail: {
          include: {
            product: true,
          },
        },
        user: true,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const updateTransactionQuery = async (
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
    const res = await prisma.transaction.updateMany({
      where: {
        id: id,
      },
      data: {
        user_id: user_id,
        date: date,
        total_price: total_price,
        total_qty: total_qty,
        payment_method_id: payment_method_id,
        payment_amount: payment_amount,
        payment_change: payment_change,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const groupTransactionByDateQuery = async () => {
  try {
    const res =
      await prisma.$queryRaw`SELECT DATE_FORMAT(date, '%Y-%m-%d') AS date, AVG(total_price) AS total
            FROM transaction
            GROUP BY DATE_FORMAT(date, '%Y-%m-%d')`;
    return res;
  } catch (err) {
    throw err;
  }
};
