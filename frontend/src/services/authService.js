import { SERVER_MAIN_URL } from '../constants.js';

export const register = async (data) => {

    try {
        let jsonResponce = await fetch(`${SERVER_MAIN_URL}/auth/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        let registeredUser = await jsonResponce.json();

        return registeredUser;
        
    } catch (err) {
        console.log(err)
    }
    
        

};

export const login = async (userData) => {

    let responce = await fetch(`${SERVER_MAIN_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    let user = await responce.json();
    return user;


};