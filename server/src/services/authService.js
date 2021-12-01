import User from "../models/User.js"
import config from "../config/config.js";

export const register = async (registerData) => {

    let user = await User.create(registerData);

    return user;
};

export const login = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });

        if (user) {
            let validatedPassword = await user.validatePassword(password);

            if (!validatedPassword) {
                return;
            } else {
                return user;
            }
        };

    } catch (err) {
        console.log(err);
    };
};