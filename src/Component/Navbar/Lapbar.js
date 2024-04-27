import React from "react";
import Navbar from "./mobilenav";
import DarkMode from "../DarkMode/DarkMode";
import "./Navbar.css";
function Lapbar() {
  return (
    <div>
      <ul className="logo">
        <img src="assets\logo\Screenshot 2024-01-15 125410.png" alt=""></img>
        <Navbar className="Navbar" />
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <DarkMode />
          <label class="burger" for="burger">
            <input type="checkbox" id="burger"></input>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </ul>
    </div>
  );
}

export default Lapbar;
