import express from 'express';
const router = express.Router();
import { getFavorites, createFavorite } from '../controllers/favorites.js';

router.get('/', getFavorites);

router.post('/', createFavorite);

export default router;
