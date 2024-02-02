import express from 'express';
import { sendMessage } from '../controllers/messageController.js';
import { routeProtector } from '../middlewares/routeProtector.js';

const router = express.Router();

router.post('/send/:id', routeProtector, sendMessage);

export default router;
