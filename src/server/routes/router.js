import express from 'express';
import mainController from '../controllers/mainController';
import searchController from '../controllers/searchController';
import * as artistController from '../controllers/artistController';

const router = express.Router({ strict: true });

// Search for artists matching input string
router.post('/search', searchController);

// Get artists by genre (as query param)
router.get('/genre', artistController.getArtists);

// Get Main Page
router.get('/', mainController);
router.get('*', mainController);

export default router;
