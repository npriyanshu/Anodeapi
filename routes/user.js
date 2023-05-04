import express from 'express';
import { createnewUser, findUserById, getallUser } from '../controllers/user.js';
const router = express.Router();

router.get('/all',getallUser)

router.post('/new',createnewUser)

router.get('/',(req,res)=>{

        res.send("Nice Working");

    })
router.get('/userid/:id',findUserById);
export default router;