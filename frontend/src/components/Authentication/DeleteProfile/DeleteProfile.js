import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../../contexts/AuthContext";
import * as userService from "../../../services/userService";

const DeleteProfile = ({
    user,
}) => {

    let navigate = useNavigate();

    let { setIsLogged, setLoggedUserData } = useContext(AuthContext);

    const onClickNoHandler = (e) => {
        e.preventDefault();

        navigate('/auth/edit-delete-profile');
    };

    const onClickYesHandler = async (e) => {
        e.preventDefault();

        await userService.deleteUser(user._id);

        sessionStorage.removeItem('user');
        setIsLogged(false);
        setLoggedUserData({});
        navigate('/');
    };



    return (
        <div>
            <div>Are you sure you want to delete your profile, {user.firstName}?</div>
            <button onClick={onClickYesHandler}>Yes</button>
            <button onClick={onClickNoHandler}>No</button>
        </div>
    )
};

export default DeleteProfile;