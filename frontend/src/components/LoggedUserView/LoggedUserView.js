import { Routes, Route } from "react-router-dom";

import Main from "../Main/Main";
import Categories from "../Categories/Categories";
import Books from "../Categories/Books/Books";
import About from "../About/About";
import ContactSection from "../ContactSection/ContactSection";
import InfoSection from "../InfoSection/InfoSection";
import AddEbook from "../AddEbook/AddEbook";
import Logout from "../Logout/Logout";

function LoggedUserView() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<ContactSection />} />
            <Route path="/info" element={<InfoSection />} />
            <Route path="/add-ebook" element={<AddEbook />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    );
};

export default LoggedUserView;