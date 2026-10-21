import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/help">Help</NavLink>
      
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
}