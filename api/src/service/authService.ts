import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { UserLogin } from '../query/authQuery';

const prisma = new PrismaClient();

export const loginService = async ({ email, password }: UserLogin) => {
	try {
		const isUserExist = await prisma.user.findUnique({
			where: { email },
		});
		if (!isUserExist) throw new Error('Sorry, email doesnt exist');
		const isValid = await bcrypt.compare(password, isUserExist.password);
		if (!isValid) throw new Error('Wrong password');
		return 'Login Success';
	} catch (err) {
		throw err;
	}
};
