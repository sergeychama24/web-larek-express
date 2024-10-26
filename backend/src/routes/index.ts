import { Router } from 'express';
import productRouter from './product';
import orderRouter from './order';
import NotFoundError from '../errors/not-found-error';

const router = Router();

router.use('/product', productRouter);
router.use('/order', orderRouter);
router.use('/*', () => {
  throw new NotFoundError();
});

export default router;
