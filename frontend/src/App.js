import { Routes, Route } from "react-router-dom";

import SliderSection from './components/SliderSection/SliderSection';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import About from './components/About/About';
import ContactSection from './components/ContactSection/ContactSection';
import InfoSection from './components/InfoSection/InfoSection';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
        <Header />

      <Routes>
        <Route path="/home" element={<SliderSection />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<ContactSection />} />
        <Route path="/info" element={<InfoSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

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
