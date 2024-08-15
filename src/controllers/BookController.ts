import { Request, Response } from 'express';
import VolumeModel, { Volume } from '../models/Volume';

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

export const getBooksByUsername = async (req: Request, res: Response) => {
  const username = Array.isArray(req.query.username)
    ? req.query.username[1]
    : (req.query.username as string | undefined);
  const volumes: Volume[] = await VolumeModel.find({ username });
  res.send(volumes);
};

export const getBooksByStatus = async (req: Request, res: Response) => {
  const status = Array.isArray(req.query.status)
    ? req.query.status[1]
    : (req.query.status as string | undefined);
  const username = Array.isArray(req.query.username)
    ? req.query.username[1]
    : (req.query.username as string | undefined);
  if (status !== '' && username !== '') {
    const volumes: Volume[] = await VolumeModel.find({
      status,
      username,
    });
    res.send(volumes);
  } else if (username !== '') {
    const volumes: Volume[] = await VolumeModel.find({ username });
    res.send(volumes);
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

export const updateBook = async (req: Request, res: Response) => {
  const book: Volume = req.body;
  const existingBook = await VolumeModel.findOne({ _id: book._id });
  if (existingBook) {
    await VolumeModel.findByIdAndUpdate(book._id, book, { new: true })
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
