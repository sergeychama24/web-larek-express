import express from 'express';
import cors from 'cors';
import { PORT } from './utils/constants';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
