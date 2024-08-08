import { Request, Response } from 'express';
import LoginModel, { LoginData } from '../models/Login';

export const register = async (req: Request, res: Response) => {
  const loginData: LoginData = req.body;
  const existingUser = await LoginModel.findOne({
    username: loginData.username,
  });
  if (existingUser) {
    res.send(false);
  } else {
    await LoginModel.create(loginData);
  }
};

export const login = async (req: Request, res: Response) => {
  const loginData: LoginData = req.body;
  const existingUser = await LoginModel.findOne({
    username: loginData.username,
  });
  if (existingUser) {
    if (existingUser.password === loginData.password) {
      res.set('Content-Type', 'text/html');
      res.send(true);
    }
  } else {
    res.send(false);
  }
};

export default login;
