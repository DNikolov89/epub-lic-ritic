import './EditDeleteProfile.css';

import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import * as userService from '../../../services/userService';
import AuthContext from '../../../contexts/AuthContext';

const EditDeleteProfile = ({
    user,
}) => {

    let { setLoggedUserData, setIsLogged } = useContext(AuthContext);

    let [passwordMissmatch, setPasswordMissmatch] = useState(false);
    let [emptyFields, setEmptyFields] = useState(false);

    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        setPasswordMissmatch(false);
        setEmptyFields(false);

        let formData = Object.fromEntries(new FormData(e.currentTarget));
        let { firstName, lastName, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            return setPasswordMissmatch(true);
        };

        if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
            return setEmptyFields(true);
        }

        let changedUser = await userService.changeUserData({ firstName, lastName, email, password, _id: user._id });

        setLoggedUserData(changedUser);

        navigate('/');
    };

    return (
        <section id="register-section" >
            <form id="register-form" method="PUT" onSubmit={onSubmitHandler}>
                <fieldset id="edit-delete-profile-fieldset">
                    <legend>Edit or Delete Profile</legend>
                    <p className="field">
                        <label htmlFor="firstName">First Name</label>
                        <span className="input">
                            <input type="text" name="firstName" id="firstName" placeholder="First Name" defaultValue={user.firstName} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="lastName">Last Name</label>
                        <span className="input">
                            <input type="text" name="lastName" id="lastName" placeholder="Last Name" defaultValue={user.lastName} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" defaultValue={user.email} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirmPassword" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>

                    {passwordMissmatch && <div style={{ color: 'red' }}>Password missmatched!</div>}
                    {emptyFields && <div style={{ color: 'red' }}>All fields must be filled!</div>}
                    
                    <input id="edit-profile-button" type="submit" value="Edit Profile" />
                    
                    <Link to={`/auth/${user._id}/delete`}>
                    <button id="delete-profile-button">Delete Profile</button>
                    </Link>

                </fieldset>
            </form>
        </section>
    );
};

export default EditDeleteProfile;