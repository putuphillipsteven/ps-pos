import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const ErrorHandler: ErrorRequestHandler = (
	err,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	console.log('Middleware Error Handling');
	const errStatus = (err.status as number) || 500;
	const errMsg = err.message || 'Something went wrong';
	res.status(errStatus).json({
		message: errMsg,
		stack: process.env.NODE_ENV === 'development' ? err.stack : {},
	});
};
