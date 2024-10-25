import { Request, Response } from 'express';
import { faker } from '@faker-js/faker';

export const createOrder = (req: Request, res: Response) => {
  const {
    payment,
    email,
    phone,
    address,
    total,
    items,
  } = req.body;

  res.status(201).send({
    id: faker.string.uuid(),
    total,
  });
};
