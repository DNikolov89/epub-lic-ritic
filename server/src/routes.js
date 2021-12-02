import express from 'express';

import authController from './controllers/authController.js';
import userController from './controllers/userController.js';
import booksController from './controllers/booksController.js';

const router = express.Router();

router.use('/auth', authController);
router.use('/user', userController);
router.use('/ebooks', booksController);

export default router;