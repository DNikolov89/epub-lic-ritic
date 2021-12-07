import { SERVER_MAIN_URL } from '../constants';

export const changeUserData = async (data) => {

    try {
        let responce = await fetch(`${SERVER_MAIN_URL}/user/changeUserData`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        });

        let changedUser = responce.json();

        return changedUser;

    } catch (err) {
        console.log(err)
    };
};

export const getOneByEmail = async (email) => {

    try {
        let responce = await fetch(`${SERVER_MAIN_URL}/user/getOneByEmail`, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: email
        });

        let user = await responce.json();

        return user;

    } catch (err) {
        console.log(err)
    };
};

export const deleteUser = async (userId) => {

    let jsonResponce = await fetch(`${SERVER_MAIN_URL}/user/deleteUser/${userId}`);
    let responce = await jsonResponce.json();

    return responce;
};