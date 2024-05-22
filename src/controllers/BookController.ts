import { Request, Response } from 'express';
import VolumeModel, { Volume } from '@backend/src/models/Volume';

export const getBook = async (req: Request, res: Response) => {
  const { id } = req.query;
  const existingBook = await VolumeModel.findOne({ id: id as string });
  if (existingBook) {
    res.set('Content-Type', 'text/html');
    res.send(existingBook);
  } else {
    res.send(null);
  }
};

export const setBookStatus = async (req: Request, res: Response) => {
  const book: Volume = req.body;
  const existingBook = await VolumeModel.findOne({ id: book.id });
  if (existingBook) {
    existingBook.status = book.status;
    await existingBook
      .save()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  } else {
    VolumeModel.create(book)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
  res.end();
};

export const deleteBookStatus = async (req: Request, res: Response) => {
  const id = Array.isArray(req.query.id)
    ? req.query.id[0]
    : (req.query.id as string | undefined);

  VolumeModel.deleteOne({ id })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  res.end();
};
