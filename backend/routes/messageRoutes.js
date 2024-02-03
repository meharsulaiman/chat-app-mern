import express from 'express';
import { getMessage, sendMessage } from '../controllers/messageController.js';
import { routeProtector } from '../middlewares/routeProtector.js';

const router = express.Router();

router.get('/:id', routeProtector, getMessage);
router.post('/send/:id', routeProtector, sendMessage);

export default router;
