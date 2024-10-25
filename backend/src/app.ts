import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, DB_ADDRESS } from './utils/constants';

const app = express();

mongoose.connect(DB_ADDRESS)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
