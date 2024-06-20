import mongoose from 'mongoose';

export enum BookStatus {
  WantToRead = 'Want to read',
  Reading = 'Reading',
  Readed = 'Readed',
  Droppped = 'Dropped',
}

export interface ImageLinks {
  thumbnail: string | undefined;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  description: string;
  imageLinks: ImageLinks;
  pageCount: number;
}

export interface Volume {
  id: string;
  volumeInfo: VolumeInfo;
  status: BookStatus | undefined;
  username: string;
}

const volumeSchema = new mongoose.Schema<Volume>({
  id: {
    type: String,
    required: [true, 'Please enter the book ID'],
  },
  volumeInfo: {
    title: {
      type: String,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    authors: {
      type: [String],
      required: true,
    },
    imageLinks: {
      thumbnail: {
        type: String,
      },
    },
  },
  status: {
    type: String,
    required: [true, 'Please enter the status of the book'],
  },
  username: {
    type: String,
    required: [true, 'Please enter the username associated'],
  },
});

const VolumeModel = mongoose.model('Book', volumeSchema);

export default VolumeModel;
