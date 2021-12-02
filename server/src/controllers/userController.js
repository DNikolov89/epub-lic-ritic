import { Router } from 'express';
import User from '../models/User.js'

const router = Router();

router.post('/getOneByEmail', async (req, res) => {
    let email = req.body;

    try {
        let user = await User.findOne({ email });

        res.json(user);
    } catch (err) {
        console.log(err);
    };
});

export default router;