// src/controllers/UserController.ts

import { Request, Response } from 'express';
import User from '../models/Users';

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, username, email, password } = req.body;
  try {
    const newUser = new User({ firstName, lastName, username, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};
