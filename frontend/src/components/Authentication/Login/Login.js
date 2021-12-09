import './Login.css'

import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

import * as authService from '../../../services/authService';
import AuthContext from '../../../contexts/AuthContext';

function Login() {

    const navigate = useNavigate();

    let { setIsLogged, setLoggedUserData } = useContext(AuthContext);

    let [emptyImputs, setEmptyImputs] = useState(false);
    let [noUser, setNoUser] = useState(false);


    async function submitHandler(e) {
        e.preventDefault();

        setNoUser(false);
        setEmptyImputs(false);

        let formData = new FormData(e.currentTarget);
        let userData = Object.fromEntries(formData);
        let email = userData.email;
        let password = userData.password;

        if (email === '' || password === '') {
            return setEmptyImputs(true);
        };

        try {
            let user = await authService.login(userData);
            
            if (user) {
                let {_id, firstName, lastName, email} = user;
                
                sessionStorage.setItem('user', JSON.stringify({_id, firstName, lastName, userEmail: email}));
                setIsLogged(true);
                setLoggedUserData({_id, firstName, lastName, userEmail: email});
                navigate('/');
            } else {
                setNoUser(true);
            }
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <section id="login-section" >
            <form id="login-form" method="POST" onSubmit={submitHandler}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input className="login-input-fields" type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input className="login-input-fields" type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    {emptyImputs && <div id="login-warning">All fields must be filled!</div>}
                    {noUser && <div id="login-warning">Wrong username or password!</div>}
                    <input id="login-button" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
};

export default Login;