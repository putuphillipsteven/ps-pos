import { Prisma, PrismaClient } from '@prisma/client';
import {
	CreateProductProps,
	GetProductFilterProps,
	UpdateProductProps,
} from '../entities/product.entities';
const prisma = new PrismaClient();

export const getProductQuery = async (id: number): Promise<any> => {
	try {
		const res = await prisma.product.findUnique({
			where: {
				id: id,
			},
			include: {
				product_group: true,
			},
		});
		return res;
	} catch (err) {
		throw err;
	}
};

export const getAllProductQuery = async (
	page: number,
	pageSize: number,
	sortField: string,
	sortOrder: string,
	branch_id: number,
	gte: number,
	lte: number,
	product_category_id: number,
	product_group_id: number,
	product_name: string,
) => {
	try {
		const skip = (page - 1) * pageSize;
		const take = pageSize;
		const filter: any = {};
		if (product_group_id && product_category_id) {
			filter.product_category_id = product_category_id;
			filter.product_group_id = product_group_id;
		}
		if (product_name) filter.product_name = product_name;
		const res = await prisma.product.findMany({
			skip,
			take,
			where: {
				...filter,
			},
			include: {
				status: true,
				product_group: true,
				product_category: true,
				stock: {
					include: {
						branch: true,
					},
					where: {
						quantity: {
							gte: gte,
							lte: lte,
						},
						branch_id: branch_id,
					},
				},
			},
			orderBy: {
				[sortField]: sortOrder as any,
			},
		});
		return res;
	} catch (err) {
		throw err;
	}
};

export const findProductQuery = async (
	product_name: string | null = null,
	category_id: number | null = null,
) => {
	try {
		const filter: any = {};
		if (product_name != 'undefined') filter.product_name = product_name;
		if (category_id) filter.category_id = category_id;
		const res = await prisma.product.findMany({
			include: {
				product_group: true,
				product_category: true,
			},
			where: {
				...filter,
			},
		});
		return res;
	} catch (err) {
		throw err;
	}
};

export const createProductQuery = async (
	product_name: string,
	product_group_id: number,
	product_category_id: number,
	product_price: number,
	product_image: string,
	product_description: string,
	product_status_id: number,
) => {
	try {
		const res = await prisma.product.create({
			data: {
				product_name,
				product_group_id,
				product_category_id,
				product_price,
				product_image,
				product_description,
				product_status_id,
			},
		});
		return res;
	} catch (err) {
		throw err;
	}
};

export const updateProductQuery = async (
	id: number,
	product_name: string,
	product_group_id: number,
	product_category_id: number,
	product_price: number,
	product_image: string,
	product_description: string,
	product_status_id: number,
) => {
	try {
		const res = await prisma.product.updateMany({
			where: {
				id: id,
			},
			data: {
				product_name: product_name,
				product_group_id: product_group_id,
				product_category_id: product_category_id,
				product_price: product_price,
				product_image: product_image,
				product_description: product_description,
				product_status_id: product_status_id,
			},
		});
		return res;
	} catch (err) {
		throw err;
	}
};

export class ProductQuery {
	prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	public async findProductByName(product_name: string) {
		try {
			const res = await this.prisma.product.findFirst({
				where: {
					product_name,
				},
				select: {
					product_name: true,
				},
			});
			return res;
		} catch (err) {
			throw err;
		}
	}

	public async getProducts(filters: GetProductFilterProps) {
		const skip = (Number(filters.page) - 1) * +filters.pageSize;
		const take = Number(filters.pageSize);

		const newFilter = {
			skip,
			take,
			where: {},
			orderBy: {},
		};

		const newInlude = {
			status: true,
			product_group: true,
			product_category: true,
		};

		if (filters.product_name) {
			newFilter.where = {
				product_name: { contains: filters?.product_name },
			};
		}

		if (filters.product_category_id) {
			newFilter.where = {
				product_category_id: filters.product_category_id,
			};
		}

		if (filters?.branch_id) {
			newFilter.where = {
				branch_id: filters?.branch_id,
			};
		}

		if (filters?.stock) {
			newFilter.where = {
				stock: {
					include: {
						branch: true,
					},
					where: {
						quantity: {
							gte: 0,
							lte: filters?.stock,
						},
					},
				},
			};
		}

		if (filters?.sort) {
			newFilter.orderBy = {
				product_name: filters?.sort,
			};
		}

		const total = await this.prisma.product.count({});
		const data = await this.prisma.product.findMany({
			...newFilter,
			include: {
				...newInlude,
			},
		});

		return {
			total,
			data,
		};
	}

	public async createProduct(data: CreateProductProps) {
		try {
			const res = await this.prisma.product.create({ data: { ...data } });
			return res;
		} catch (err) {
			throw err;
		}
	}

	public async updateProduct(data: UpdateProductProps) {
		try {
			const dataToUpdate: any = {}; // Use `any` type temporarily for simplicity

			if (data.product_name) dataToUpdate.product_name = data.product_name;
			if (data.product_price) dataToUpdate.product_price = Number(data.product_price);
			if (data.product_category_id)
				dataToUpdate.product_category_id = Number(data.product_category_id);
			if (data.product_image) dataToUpdate.product_image = data.product_image;
			if (data.product_description) dataToUpdate.product_description = data.product_description;
			if (data.product_group_id) dataToUpdate.product_group_id = Number(data.product_group_id);
			if (data.product_status_id) dataToUpdate.product_status_id = Number(data.product_status_id);

			const res = await prisma.product.update({
				where: { id: data.id },
				data: { ...dataToUpdate },
			});
			return res;
		} catch (err) {
			throw err;
		}
	}
}
