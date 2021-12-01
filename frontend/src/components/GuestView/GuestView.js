import { Routes, Route } from "react-router-dom";

import Main from "../Main/Main";
import About from "../About/About";
import ContactSection from "../ContactSection/ContactSection";
import InfoSection from "../InfoSection/InfoSection";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Logout from "../Logout/Logout";

function GuestView() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<ContactSection />} />
            <Route path="/info" element={<InfoSection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    );
};

export default GuestView;