import express from 'express'
import  {createUser, loginUser} from '../controllers/UserController.js';

const router = express.Router();

// POST: Create a new user
router.post('/create', createUser);
// POST: Login
router.post('/login', loginUser);


export default router;
