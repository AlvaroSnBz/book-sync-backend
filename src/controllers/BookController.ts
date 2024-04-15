import { Request, Response } from 'express';
import BookModel, { Book } from '@backend/src/models/Book';

export const getBook = async (req: Request, res: Response) => {
  const { id } = req.query;
  const existingBook = await BookModel.findOne({ id: id as string });
  if (existingBook) {
    res.set('Content-Type', 'text/html');
    res.send(existingBook);
  } else {
    res.send(null);
  }
};

export const setBookStatus = async (req: Request, res: Response) => {
  const book: Book = req.body;
  const existingBook = await BookModel.findOne({ id: book.id });
  if (existingBook) {
    existingBook.status = book.status;
    await existingBook
      .save()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  } else {
    BookModel.create(book)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
  res.end();
};
