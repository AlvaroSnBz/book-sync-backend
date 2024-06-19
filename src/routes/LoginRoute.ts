import express from 'express';
import { login, signIn } from '../controllers/LoginController';

const loginRouter = express.Router();

loginRouter.post('/login', login);
loginRouter.post('/signIn', signIn);

export default loginRouter;
