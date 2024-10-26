import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { errors } from 'celebrate';
import { PORT, DB_ADDRESS } from './config';
import router from './routes/index';
import errorHandler from './middlewares/error-handler';

const app = express();

mongoose.connect(DB_ADDRESS)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
