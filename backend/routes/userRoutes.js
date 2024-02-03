import express from 'express';
import { getUserForSidebar } from '../controllers/userController.js';
import { routeProtector } from '../middlewares/routeProtector.js';

const router = express.Router();

router.get('/', routeProtector, getUserForSidebar);

export default router;
