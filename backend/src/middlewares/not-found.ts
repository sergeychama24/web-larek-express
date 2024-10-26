import { NextFunction, Request, Response } from 'express';
import NotFoundError from '../errors/not-found-error';

export const notFoundHandle = ( req: Request, res: Response, next: NextFunction ) => {
  throw new NotFoundError();
};
