import express from 'express';
import { login } from '../controllers/LoginController';

const loginRouter = express.Router();

loginRouter.post('/login', login);

export default loginRouter;
