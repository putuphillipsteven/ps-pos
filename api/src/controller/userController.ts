import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { createUserService } from '../service/userService';
import { sendResponse } from '../utils/utilts';

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(req.body.password, salt);
		const result = await createUserService({ ...req.body, password: hashPassword });
		sendResponse(res, 200, 'Create User Success', result);
	} catch (err) {
		next(err);
	}
};
