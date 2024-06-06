import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export interface User {
	full_name: string;
	address?: string | null;
	email: string;
	password: string;
	role_id: 1 | 2 | 3;
	gender_id: 1 | 2;
	branch_id?: number | null;
	avatar?: string | null;
}

export const createUserQuery = async ({
	full_name,
	email,
	password,
	role_id = 3,
	gender_id,
}: User) => {
	try {
		const res = await prisma.user.create({
			data: {
				full_name,
				email,
				password,
				role_id,
				gender_id,
			},
		});
		return res;
	} catch (err) {
		throw err;
	}
};
