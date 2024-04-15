import express from 'express';
import {
  getBook,
  setBookStatus,
} from '@backend/src/controllers/BookController';

const bookRouter = express.Router();

bookRouter.get('/getBook', getBook);
bookRouter.post('/setBookStatus', setBookStatus);

export default bookRouter;
