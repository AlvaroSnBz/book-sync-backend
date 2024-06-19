import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRouter from './routes/BookRoutes';
import loginRouter from './routes/LoginRoute';

dotenv.config();

const app = express();

require('./db');

app.use(cors());
app.use(json());

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use('/book', bookRouter);
app.use('/login', loginRouter);
app.use(express.static('dist'));
