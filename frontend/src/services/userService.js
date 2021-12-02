import { SERVER_MAIN_URL } from '../constants';

export const getOneByEmail = async (email) => {

    try {
        let responce = await fetch(`${SERVER_MAIN_URL}/user/getOneByEmail`, {
        method:"POST",
        headers: { "Content-Type": "text/plain" },
        body: email
    });

    let user = await responce.json();

    return user;

    } catch (err) {
        console.log(err)
    };
};