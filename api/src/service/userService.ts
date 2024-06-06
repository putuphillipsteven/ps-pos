import { PrismaClient } from '@prisma/client';
import { User, createUserQuery } from '../query/userQuery';
import { exclude } from '../utils/excludePassword';
const prisma = new PrismaClient();

export const createUserService = async ({
	full_name,
	email,
	password,
	role_id,
	gender_id,
}: User) => {
	try {
		const user = await prisma.user.findUnique({
			where: { email },
		});
		if (user) throw new Error('Email has been used');
		const newUser = await createUserQuery({
			full_name,
			email,
			password,
			role_id,
			gender_id,
		});
		return exclude(newUser, ['password']);
	} catch (err) {
		throw err;
	}
};
