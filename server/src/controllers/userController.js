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

router.put('/changeUserData', async (req, res) => {
    let { firstName, lastName, password, email, _id } = req.body;

    try {
        let user = await User.findById(_id);

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        user.save();

        res.json(user);
    } catch (error) {
        console.log(error)
    }
})

router.get('/deleteUser/:userId', async (req, res) => {
    try {
        let userId = req.params.userId;
        
        let result = await User.findByIdAndDelete(userId);

        res.json(result);

    } catch (err) {
        console.log(err)
    }
})

export default router;