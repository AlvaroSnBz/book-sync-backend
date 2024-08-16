import mongoose from 'mongoose';

export interface LoginData {
  username: string;
  email: string;
  password: string;
}

const loginSchema = new mongoose.Schema<LoginData>({
  username: {
    type: String,
    required: [true, 'Please enter the username'],
  },
  email: {
    type: String,
    required: [true, 'Please enter the email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter the password'],
  },
});

const LoginModel = mongoose.model('LoginData', loginSchema);

export default LoginModel;
