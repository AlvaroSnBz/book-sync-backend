import express from 'express';
import { login, register } from '../controllers/LoginController';

const loginRouter = express.Router();

loginRouter.post('/login', login);
loginRouter.post('/register', register);

export default loginRouter;
