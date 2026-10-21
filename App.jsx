import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Help from "./pages/Help.jsx";
import Registration from "./pages/Registration.jsx";
import Settings from "./pages/Settings.jsx";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/registration/*" element={<Registration />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}