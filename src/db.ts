import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://alvarosnbz:${password}@cluster0.h3htw4y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri).then(() => {
  console.log('Connected');
});
