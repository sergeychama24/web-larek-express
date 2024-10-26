import { NextFunction, Request, Response } from 'express';
import Product from '../models/product';
import ConflictError from '../errors/conflict-error';

export const getProducts = (req: Request, res: Response, next: NextFunction) => {
  Product.find({})
    .then((products) => {
      res.json({
        items: products,
        total: products.length,
      });
    })
    .catch((error) => {
      next(error);
    });
};

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
  const {
    title,
    description,
    price,
    category,
    image,
  } = req.body;

  Product.create({
    title,
    description,
    price,
    category,
    image,
  }).then((product) => {
    res.json({ item: product });
  }).catch((error) => {
    if (error instanceof Error && error.message.includes('E1100')) {
      return next(new ConflictError());
    }
    return next(error);
  });
};
