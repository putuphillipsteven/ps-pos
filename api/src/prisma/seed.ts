import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const manager = await prisma.role.upsert({
		where: {
			id: 1,
		},
		update: {},
		create: {
			id: 1,
			name: 'Manager',
		},
	});

	const employee = await prisma.role.upsert({
		where: {
			id: 2,
		},
		update: {},
		create: {
			id: 2,
			name: 'Employee',
		},
	});

	const customer = await prisma.role.upsert({
		where: {
			id: 3,
		},
		update: {},
		create: {
			id: 3,
			name: 'Customer',
		},
	});

	const male = await prisma.gender.upsert({
		where: {
			id: 1,
		},
		update: {},
		create: {
			id: 1,
			gender_name: 'Male',
		},
	});

	const female = await prisma.gender.upsert({
		where: {
			id: 2,
		},
		update: {},
		create: {
			id: 2,
			gender_name: 'Female',
		},
	});
	const defaultManager = await prisma.user.upsert({
		where: {
			id: 1,
		},
		update: {},
		create: {
			id: 1,
			first_name: 'Default',
			last_name: 'Manager',
			email: 'defaultmanager@gmail.com',
			password: '$2b$10$E6L835/pj8LlCVPwI6deye0u4D9iWvZ8bVJayS6evgH7YB8R7bhTO',
			role_id: 1,
			gender_id: 1,
		},
	});
	const defaultEmployee = await prisma.user.upsert({
		where: {
			id: 2,
		},
		update: {},
		create: {
			id: 2,
			first_name: 'Default',
			last_name: 'Employee',
			email: 'defaultemployee@gmail.com',
			password: '$2b$10$E6L835/pj8LlCVPwI6deye0u4D9iWvZ8bVJayS6evgH7YB8R7bhTO',
			role_id: 2,
			gender_id: 1,
		},
	});
	const defaultCustomer = await prisma.user.upsert({
		where: {
			id: 3,
		},
		update: {},
		create: {
			id: 3,
			first_name: 'Default',
			last_name: 'Customer',
			email: 'defaultcustomer@gmail.com',
			password: '$2b$10$E6L835/pj8LlCVPwI6deye0u4D9iWvZ8bVJayS6evgH7YB8R7bhTO',
			role_id: 1,
			gender_id: 1,
		},
	});

	const graduation = await prisma.product_Category.upsert({
		where: {
			id: 1,
		},
		update: {},
		create: {
			id: 1,
			product_category_name: 'Graduation',
		},
	});
	const bronzeLaminating = await prisma.product.upsert({
		where: {
			id: 1,
		},
		update: {},
		create: {
			id: 1,
			product_name: 'Bronze Laminating',
			product_category_id: 1,
			product_price: 450000,
		},
	});
	const silverLaminating = await prisma.product.upsert({
		where: {
			id: 2,
		},
		update: {},
		create: {
			id: 2,
			product_name: 'Silver Laminating',
			product_category_id: 1,
			product_price: 650000,
		},
	});
	const goldLaminating = await prisma.product.upsert({
		where: {
			id: 3,
		},
		update: {},
		create: {
			id: 3,
			product_name: 'Gold Laminating',
			product_category_id: 1,
			product_price: 800000,
		},
	});
	const platinumLaminating = await prisma.product.upsert({
		where: {
			id: 4,
		},
		update: {},
		create: {
			id: 4,
			product_name: 'Platinum Laminating',
			product_category_id: 1,
			product_price: 1300000,
		},
	});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
