import {
  getProductQuery,
  getAllProductQuery,
  findProductQuery,
  createProductQuery,
  updateProductQuery,
} from "../query/productQuery";

export const getProductService = async (id: number) => {
  try {
    const res = await getProductQuery(id);
    return res;
  } catch (err) {
    throw err;
  }
};

export const getAllProductService = async (
  page: number,
  pageSize: number,
  sortField: string,
  sortOrder: string,
  branch_id: number,
  gte: number,
  lte: number,
  product_category_id: number,
  product_group_id: number,
  product_name: string
) => {
  try {
    const res = await getAllProductQuery(
      page,
      pageSize,
      sortField,
      sortOrder,
      branch_id,
      gte,
      lte,
      product_category_id,
      product_group_id,
      product_name
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const findProductService = async (
  product_name: string | null = null,
  product_group_id: number | null = null
) => {
  try {
    const res = await findProductQuery(
      product_name,
      product_group_id
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const createProductService = async (
  product_name: string,
  product_group_id: number,
  product_category_id: number,
  product_price: number,
  product_image: string,
  product_description: string,
  product_status_id: number
) => {
  try {
    const res = await createProductQuery(
      product_name,
      product_group_id,
      product_category_id,
      product_price,
      product_image,
      product_description,
      product_status_id
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const updateProductService = async (
  id: number,
  product_name: string,
  product_group_id: number,
  product_category_id: number,
  product_price: number,
  product_image: string,
  product_description: string,
  product_status_id: number
) => {
  try {
    const check = await getProductQuery(id);
    if (!check) throw new Error("Product doesnt exist");
    const res = await updateProductQuery(
      id,
      product_name,
      product_group_id,
      product_category_id,
      product_price,
      product_image,
      product_description,
      product_status_id
    );

    return res;
  } catch (err) {
    throw err;
  }
};
