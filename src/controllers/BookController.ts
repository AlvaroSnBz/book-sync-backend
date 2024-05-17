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

export const deleteBookStatus = async (req: Request, res: Response) => {
  const id = Array.isArray(req.query.id)
    ? req.query.id[0]
    : (req.query.id as string | undefined);

  BookModel.deleteOne({ id })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  res.end();
};
