import express from 'express';
import mainController from '../controllers/mainController';

const router = express.Router({strict: true});

router.get('/', mainController);

export default router;
