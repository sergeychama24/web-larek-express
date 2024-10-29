import path from 'path';
import winston from 'winston';
import expressWinston from 'express-winston';

export const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: path.join('logs/request.log'),
    }),
  ],
  format: winston.format.json(),
});

export const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({
      filename: path.join('logs/error.log'),
    }),
  ],
  format: winston.format.json(),
});
