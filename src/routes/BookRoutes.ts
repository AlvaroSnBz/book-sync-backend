import express from 'express';
import {
  getBook,
  getBooks,
  setBookStatus,
  deleteBookStatus,
} from '../controllers/BookController';

const bookRouter = express.Router();

bookRouter.get('/getBook', getBook);
bookRouter.get('/getBooks', getBooks);
bookRouter.post('/setBookStatus', setBookStatus);
bookRouter.delete('/deleteBookStatus', deleteBookStatus);

export default bookRouter;
