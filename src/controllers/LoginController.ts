import { Request, Response } from 'express';
import LoginModel, { LoginData } from '../models/Login';

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

export const signIn = async (req: Request, res: Response) => {
  const loginData: LoginData = req.body;
  const existingUser = await LoginModel.findOne({
    username: loginData.username,
  });
  if (!existingUser) {
    LoginModel.create(loginData)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
    res.send(true);
  } else {
    res.send(false);
  }
};
