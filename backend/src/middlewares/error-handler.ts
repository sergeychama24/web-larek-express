import {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from 'express';
import { Error as MongooseError } from 'mongoose';
import NotFoundError from '../errors/not-found-error';
import ConflictError from '../errors/conflict-error';
import BadRequestError from '../errors/bad-request-error';

const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let message = 'Внутренняя ошибка сервера';

  if (err instanceof NotFoundError || err instanceof ConflictError || err instanceof BadRequestError) {
    statusCode = err.statusCode;
    message = err.message;
  }
  if (err instanceof MongooseError.ValidationError) {
    statusCode = 400;
    message = err.message || 'Ошибка валидации данных при создании товара';
  }
  res.status(statusCode).json({
    message,
  });
};

export default errorHandler;
