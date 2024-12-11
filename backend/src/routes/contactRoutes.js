import express from 'express'
import { protect } from '../middleware/AuthMIddleware.js';
import { addContact, deleteContact, getContacts, updateContact } from '../controllers/ContactController.js';


const router = express.Router();

router.get('/', protect, getContacts);
router.post('/create', protect, addContact);
router.put('/update/:id', protect, updateContact);
router.delete('/delete/:id', protect, deleteContact);
export default router;