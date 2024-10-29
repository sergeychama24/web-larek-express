import { NextFunction, Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import Product from '../models/product';
import BadRequestError from '../errors/bad-request-error';

export const createOrder = (req: Request, res: Response, next: NextFunction) => {
  const { total, items } = req.body;
  const uniqueItems = [...new Set(items)];
  Product.find({ _id: { $in: uniqueItems } })
    .then(() => {
      res.status(201).send({
        id: faker.string.uuid(),
        total,
      });
    })
    .catch(() => {
      next(new BadRequestError());
    });
};
