import express from 'express';
import {
  getBook,
  getBooksByUsername,
  setBookStatus,
  deleteBookStatus,
  getBooksByStatus,
  updateBook,
} from '../controllers/BookController';

const bookRouter = express.Router();

bookRouter.get('/getBook', getBook);
bookRouter.get('/getBooksByUsername', getBooksByUsername);
bookRouter.get('/getBooksByStatus', getBooksByStatus);
bookRouter.post('/setBookStatus', setBookStatus);
bookRouter.post('/updateBook', updateBook);
bookRouter.delete('/deleteBookStatus', deleteBookStatus);

export default bookRouter;
