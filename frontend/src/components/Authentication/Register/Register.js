import './Register.css'

import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

import AuthContext from '../../../contexts/AuthContext';

import * as authService from '../../../services/authService.js';
import * as userService from '../../../services/userService';

function Register() {

    const navigate = useNavigate();
    let { setIsLogged, setLoggedUserData } = useContext(AuthContext);

    let [passwordMissmatch, setPasswordMissmatch] = useState(false);
    let [emptyFields, setEmptyFields] = useState(false);
    let [userIsRegistered, setuserIsRegistered] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        setPasswordMissmatch(false);
        setEmptyFields(false);
        setuserIsRegistered(false);

        let formData = new FormData(e.currentTarget);
        let data = Object.fromEntries(formData);
        let { firstName, lastName, email, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            return setPasswordMissmatch(true);
        };

        if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
            return setEmptyFields(true);
        };

        try {
            let existingUser = await userService.getOneByEmail(email);

            if (existingUser) {
                return setuserIsRegistered(true);
            };

            let registeredUser = await authService.register(data);
            let { _id, firstName, lastName, email: userEmail } = registeredUser;

            if (registeredUser) {
                sessionStorage.setItem('user', JSON.stringify({ _id, firstName, lastName, userEmail }));
                setIsLogged(true);
                setLoggedUserData({ _id, firstName, lastName, userEmail });
                navigate('/');
            }
        } catch (err) {
            console.log(err)
        };
    };

    return (
        <section id="register-section" >
            <form id="register-form" method="POST" onSubmit={submitHandler}>
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="regiter-form-field">
                        <label htmlFor="firstName">First Name</label>
                        <span className="input">
                            <input className="regiter-form-field-inputs" type="text" name="firstName" id="register-input-firstName" placeholder="First Name" />
                        </span>
                    </p>
                    <p className="regiter-form-field">
                        <label htmlFor="lastName">Last Name</label>
                        <span className="input">
                            <input className="regiter-form-field-inputs" type="text" name="lastName" id="register-input-lastName" placeholder="Last Name" />
                        </span>
                    </p>
                    <p className="regiter-form-field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input className="regiter-form-field-inputs" type="text" name="email" id="register-input-email" placeholder="Email" />
                        </span>
                    </p>
                    {userIsRegistered && <div style={{ color: 'red' }}>User with that email already exists!</div>}
                    <p className="regiter-form-field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input className="regiter-form-field-inputs" type="password" name="password" id="register-input-password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="regiter-form-field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input className="regiter-form-field-inputs" type="password" name="confirmPassword" id="register-input-repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    {passwordMissmatch && <div style={{ color: 'red' }}>Password missmatched!</div>}
                    {emptyFields && <div style={{ color: 'red' }}>All fields must be filled!</div>}
                    <input id="register-button" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
};

export default Register;