import { Request, Response } from 'express';
import { faker } from '@faker-js/faker';

export const createOrder = (req: Request, res: Response) => {
  const { total } = req.body;
  res.status(201).send({
    _id: faker.string.uuid(),
    total,
  });
};
