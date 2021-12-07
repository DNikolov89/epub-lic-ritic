import './Logout.css';

import { useContext, useEffect } from 'react';

import AuthContext from '../../../contexts/AuthContext';

function Logout() {

    let { setIsLogged, setLoggedUserData } = useContext(AuthContext);

    useEffect(() => {
        sessionStorage.removeItem('user');
        setLoggedUserData({});
        setIsLogged(false);
    }, []);


    return (
        <div>
            <img id="see-you-soon-img" src="/images/see-you-soon-minion.jpg" alt="See you soon!"></img>
            <div id="see-you-soon">You have successfully logged out! See you soon!</div>
        </div>
    );

};

export default Logout;