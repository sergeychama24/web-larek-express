import express from 'express';
import { PORT } from './utils/constants';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
