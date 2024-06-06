import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import bodyParser = require('body-parser');
import { ErrorHandler } from './middleware/errorHandler';
const cors = require('cors');

dotenv.config({
	path: path.resolve(__dirname, '../.env'),
});

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cors({
		origin: process.env.WHITELISTED_DOMAIN,
	}),
);

const port: number = Number(process.env.PORT) || 8000;

// Middleware to log each request
app.use((req, res, next) => {
	console.log(`[${new Date().toISOString()}] - [${req.method}] - [${req.url}]`);
	next();
});

const categoryRoute = require('./route/productCategoryRoute');
app.use('/category', categoryRoute);

const transactionRoute = require('./route/transactionRoute');
app.use('/transaction', transactionRoute);

const userRoute = require('./route/userRoute');
app.use('/user', userRoute);

const cartRoute = require('./route/cartRoute');
app.use('/cart', cartRoute);

const transactionDetailRoute = require('./route/transactionDetailRoutes');
app.use('/transaction-detail', transactionDetailRoute);

const productRoute = require('./route/productRoute');
app.use('/product', productRoute);

const branchRoute = require('./route/branchRoute');
app.use('/branch', branchRoute);

const statusRoute = require('./route/statusRoute');
app.use('/status', statusRoute);

const profileRoute = require('./route/profileImageRoute');
app.use('/profile', profileRoute);

app.use('/uploads', express.static(path.join(__dirname, './public/images')));

const stockRoute = require('./route/stockRoute');
app.use('/stock', stockRoute);

app.use(ErrorHandler);

app.listen(port, () => {
	console.log(`Server started on port : [${port}]`);
});
