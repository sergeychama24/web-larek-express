import { Router } from 'express';
import productRouter from './product';
import orderRouter from './order';
import { errorLogger, requestLogger } from '../middlewares/logger';
import { notFoundHandle } from '../middlewares/not-found';

const router = Router();

router.use('/product', requestLogger, productRouter, errorLogger);
router.use('/order', requestLogger, orderRouter, errorLogger);
router.use('/*', requestLogger, notFoundHandle, errorLogger);

export default router;
