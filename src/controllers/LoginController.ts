import { Request, Response } from 'express';
import LoginModel, { LoginData } from '../models/Login';

export const register = async (req: Request, res: Response) => {
  const loginData: LoginData = req.body;
  const existingUser = await LoginModel.find({
    $or: [{ username: loginData.username }, { email: loginData.email }],
  });
  if (existingUser.length > 0) {
    let messageError = 'Error';
    existingUser.forEach((doc) => {
      const coincidencias = [];
      if (doc.username === loginData.username) {
        coincidencias.push('username');
      }
      if (doc.email === loginData.email) {
        coincidencias.push('email');
      }
      messageError = `Error: ${coincidencias.join(' and ')} already in use`;
    });
    res.send({
      isValid: false,
      messageError,
    });
  } else {
    await LoginModel.create(loginData);
    res.send({
      isValid: true,
      messageError: 'Register complete',
    });
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
