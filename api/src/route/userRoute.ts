import express from 'express';
import { createUserController } from '../controller/userController';
import { validator } from '../middleware/validator';
import { body } from 'express-validator';
const router = express.Router();

const createUserValidations = [
	body('full_name').notEmpty().withMessage('Email cant be empty'),
	body('email').notEmpty().withMessage('Email cant be empty'),
	body('email').isEmail().withMessage('Invalid email format'),
	body('password')
		.matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
		.withMessage(
			'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character',
		),
	,
];
router.post('/', validator(createUserValidations), createUserController);

export = router;
