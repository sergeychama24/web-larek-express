import { Router } from 'express';
import { getAllProducts } from '../controllers/product';

const router = Router();

router.get('/', getAllProducts);

router.post('/', () => {});

export default router;
