import { Router } from 'express';

import * as authService from '../services/authService.js';

const router = Router();

router.post('/register', async (req, res) => {

    try {
        let registerData = req.body;

        let registeredUser = await authService.register(registerData);

        res.json(registeredUser);

    } catch (err) {
        console.log(err);
    };

});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await authService.login({ email, password });

        if (user) {
            res.json(user);
        } else {
            res.json(null);
        }

    } catch (err) {
        console.log(`err in routes---${err}`)
    };


});

router.post('/logout', (req, res) => {
    
    let userId = req.body; 

    authService.logout(userId);

});

export default router;