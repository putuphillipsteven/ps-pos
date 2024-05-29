import { Request, Response } from "express";
import {
  getProductService,
  getAllProductService,
  findProductService,
  createProductService,
  updateProductService,
} from "../service/productService";

export const getProductController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const newId = Number(id);
  try {
    const result = await getProductService(newId);
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send(err.message);
  }
};

export const getAllProductController = async (
  req: Request,
  res: Response
) => {
  const {
    page,
    pageSize,
    sortField,
    sortOrder,
    branch_id,
    gte,
    lte,
    product_category_id,
    product_group_id,
    product_name,
  } = req.query;
  try {
    const result = await getAllProductService(
      Number(page),
      Number(pageSize),
      String(sortField) || "product_name",
      String(sortOrder) || "asc",
      Number(branch_id),
      Number(gte) || 0,
      Number(lte) || 0,
      Number(product_category_id),
      Number(product_group_id),
      String(product_name)
    );
    return res.status(200).json({
      message: "Find all product success",
      result: result,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send(err.message);
  }
};

export const findProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const { product_name, category_id } = req.query;
    const result = await findProductService(
      String(product_name),
      Number(category_id)
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send(err.message);
  }
};

export const createProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      product_name,
      product_group_id,
      product_category_id,
      product_price,
      product_description,
      product_status_id,
    } = req.body;
    const newProductGroupId = Number(product_group_id);
    const newProductPrice = Number(product_price);
    const result = await createProductService(
      product_name,
      newProductGroupId,
      Number(product_category_id),
      newProductPrice,
      req?.file?.filename || "",
      product_description,
      Number(product_status_id)
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send(err.message);
  }
};

export const updateProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const newId = Number(id);
    const {
      product_name,
      product_group_id,
      product_category_id,
      product_price,
      product_image,
      product_description,
      product_status_id,
    } = req.body;
    const newProductGroupId = Number(product_group_id);
    const newProductPrice = Number(product_price);
    const newProductStatus = Number(product_status_id);
    const result = await updateProductService(
      newId,
      product_name || product_name,
      newProductGroupId || product_group_id,
      Number(product_category_id) || product_category_id,
      newProductPrice || product_price,
      req?.file?.filename || product_image,
      product_description || product_description,
      newProductStatus || product_status_id
    );
    console.log(product_status_id);

    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send(err.message);
  }
};
