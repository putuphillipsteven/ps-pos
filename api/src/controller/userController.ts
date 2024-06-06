import { NextFunction, Request, Response } from 'express';
import { createUserService } from '../service/userService';
import { sendResponse } from '../utils/utilts';

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await createUserService(req.body);
		sendResponse(res, 200, 'Create User Success', result);
	} catch (err) {
		next(err);
	}
};
