import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ContactSection from './components/ContactSection/ContactSection';
import Categories from './components/Categories/Categories';
import Books from './components/Categories/Books/Books';
import Details from './components/Categories/Details/Details';
import About from './components/About/About';
import AddEbook from './components/AddEbook/AddEbook';
import MyEbooks from './components/MyEbooks/MyEbooks';
import Logout from './components/Authentication/Logout/Logout';
import Register from './components/Authentication/Register/Register';
import Login from './components/Authentication/Login/Login';
import EditDeleteProfile from './components/Authentication/EditDeleteProfile/EditDeleteProfile';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Edit from './components/Categories/Details/Edit/Edit';
import Delete from './components/Categories/Details/Delete/Delete';
import AuthContext from './contexts/AuthContext';
import DeleteProfile from './components/Authentication/DeleteProfile/DeleteProfile';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';

function App() {

  let [loggedUserData, setLoggedUserData] = useState({});
  let [isLogged, setIsLogged] = useState(false);
  let user = sessionStorage.getItem('user');

  useEffect(() => {
    if (user) {
      setIsLogged(true);
      setLoggedUserData(JSON.parse(user))
    }
  }, [user])


  const guestView = (
    <>
      <Header isLogged={isLogged} />

      <AuthContext.Provider value={{ loggedUserData, setIsLogged, setLoggedUserData }}>
        <Routes>
          <Route path="/" element={<Main isLogged={isLogged} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<ContactSection />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/logout" element={<Logout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContext.Provider>

      <Footer />
    </>
  );

  const loggedUserView = (
    <>
      <Header isLogged={isLogged} loggedUserData={loggedUserData} />

      <AuthContext.Provider value={{ loggedUserData, setIsLogged, setLoggedUserData }}>
        <Routes>
          <Route path="/" element={<Main isLogged={isLogged} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:genre" element={<Books />} />
          <Route path="/categories/:genre/:bookId" element={<Details />} />
          <Route path="/categories/:genre/:bookId/edit" element={<Edit userId={loggedUserData._id}/>} />
          <Route path="/categories/:genre/:bookId/delete" element={<Delete />} />
          <Route path="/add-ebook" element={<AddEbook />} />
          <Route path="/my-ebooks" element={<MyEbooks userId={loggedUserData._id} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<ContactSection />} />
          <Route path="/auth/logout" element={<Logout />} />
          <Route path="/auth/edit-delete-profile" element={<EditDeleteProfile user={loggedUserData} />} />
          <Route path="/auth/:userId/delete" element={<DeleteProfile user={loggedUserData} />} />
          <Route path="/search/:inputText" element={<Search />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContext.Provider>

      <Footer />
    </>
  );

  return (
    <>
      {isLogged
        ? loggedUserView
        : guestView
      }
    </>
  )
};


export default App;
