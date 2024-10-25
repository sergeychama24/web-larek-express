import { Request, Response } from 'express';
import Product from '../models/product';

export const getProducts = (req: Request, res: Response) => {
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

export const createProduct = (req: Request, res: Response) => {
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
  }).catch((err) => {
    res.status(500).json({ message: err.message });
  });
};
