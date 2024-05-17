import express from 'express';
import {
  deleteBookStatus,
  getBook,
  setBookStatus,
} from '@backend/src/controllers/BookController';

const bookRouter = express.Router();

bookRouter.get('/getBook', getBook);
bookRouter.post('/setBookStatus', setBookStatus);
bookRouter.delete('/deleteBookStatus', deleteBookStatus);

export default bookRouter;
