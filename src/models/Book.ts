import mongoose from 'mongoose';

export enum BookStatus {
  WantToRead = 'Want to read',
  Reading = 'Reading',
  Readed = 'Readed',
  Droppped = 'Dropped',
}

export interface Book {
  id: string;
  status: BookStatus;
}

const bookSchema = new mongoose.Schema<Book>({
  id: {
    type: String,
    required: [true, 'Please enter the book ID'],
  },
  status: {
    type: String,
    required: [true, 'Please enter the status of the book'],
  },
});

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;
