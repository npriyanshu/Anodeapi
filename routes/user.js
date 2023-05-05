import express from 'express';
import { register, getallUser, login, getMyProfile, logout } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();

router.get('/all',getallUser)

router.post('/new',register)
router.post('/login',login)
router.post('/logout',logout)

router.get('/me', isAuthenticated ,getMyProfile)
export default router;