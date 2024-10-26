import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { errors } from 'celebrate';
import { PORT, DB_ADDRESS } from './utils/constants';
import router from './routes/index';

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

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
