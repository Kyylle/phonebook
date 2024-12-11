// src/routes/userRoutes.ts

import express, { Request, Response } from 'express';
import * as UserController from '../controllers/UserController';

const router = express.Router();

// POST: Create a new user
router.post('/create', UserController.createUser);

// GET: Get all users
router.get('/', UserController.getAllUsers);

export default router;
