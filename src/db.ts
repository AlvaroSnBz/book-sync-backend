import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri = process.env.MONGO_URI;

if (uri) {
  mongoose.connect(uri).then(() => {
    console.log('Connected');
  });
} else {
  console.log('Database URI is undefined');
}
