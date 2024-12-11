import express from 'express'
import  {createUser, getUsers, loginUser} from '../controllers/UserController.js';

const router = express.Router();

//GET: Retrive all users
router.get('/', getUsers);
// POST: Create a new user
router.post('/create', createUser);
// POST: Login
router.post('/login', loginUser);


export default router;
