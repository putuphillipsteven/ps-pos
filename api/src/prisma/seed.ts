import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const customer = await prisma.role.upsert({
		where: {
			id: 1,
		},
		update: {},
		create: {
			id: 1,
			name: 'Customer',
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
	const manager = await prisma.role.upsert({
		where: {
			id: 3,
		},
		update: {},
		create: {
			id: 3,
			name: 'Manager',
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
	const johnDoe = await prisma.user.upsert({
		where: {
			id: 1,
		},
		update: {},
		create: {
			id: 1,
			first_name: 'John',
			last_name: 'Doe',
			email: 'johndoe@gmail.com',
			gender_id: 1,
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
