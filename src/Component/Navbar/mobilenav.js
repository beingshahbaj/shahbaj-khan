import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ className }) {
  return (
    <nav className={className}>
      <ul>
        <li className=".roboto-regular">
          <NavLink exact to="/">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/About">
            <i className="fa-solid fa-user"></i>
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Services">
            <i className="fa-solid fa-laptop-code"></i>
            <span>Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact">
            <i className="fa-regular fa-address-card"></i>
            <span>Contact</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Work">
            <i className="fa-solid fa-computer-mouse"></i>
            <span>Work</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
