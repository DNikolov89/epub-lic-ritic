import { useState } from 'react';

import Header from './components/Header/Header';
import LoggedUserView from "./components/LoggedUserView/LoggedUserView";
import GuestView from "./components/GuestView/GuestView";
import AuthContext from './contexts/AuthContext';

function App() {

  let [isLogged, setIsLogged] = useState(false);
  let [loggedUserData, setLoggedUserData] = useState({});


  return (
    <>
      <Header isLogged={isLogged} />

      <AuthContext.Provider value={{ setIsLogged, setLoggedUserData }}>
        {isLogged
          ? <LoggedUserView />
          : <GuestView />}
      </AuthContext.Provider>

      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>
    </>
  );
};


export default App;
