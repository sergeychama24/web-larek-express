import { Request, Response } from 'express';
import Product from '../models/product';

export const getAllProducts = (req: Request, res: Response) => {
  Product.find({})
    .then((products) => {
      res.json({
        items: products,
        total: products.length,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
