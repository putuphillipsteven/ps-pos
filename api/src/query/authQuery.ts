import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export interface UserLogin {
	email: string;
	password: string;
}
