import { PrismaClient } from '@prisma/client';
import { User, createUserQuery } from '../query/userQuery';
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
		if (user) throw new Error('User is exist');
		const res = await createUserQuery({
			full_name,
			email,
			password,
			role_id,
			gender_id,
		});
		return res;
	} catch (err) {
		throw err;
	}
};
