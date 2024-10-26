import { Router } from 'express';
import productRouter from './product';
import orderRouter from './order';
import NotFoundError from '../errors/not-found-error';
import { errorLogger, requestLogger } from '../middlewares/logger';

const router = Router();

router.use('/product', requestLogger, productRouter, errorLogger);
router.use('/order', requestLogger, orderRouter, errorLogger);
router.use('/*', requestLogger, () => {
  throw new NotFoundError();
}, errorLogger);

export default router;
