import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const darkmode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const lightmode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const togletheme = (e) => {
    if (e.target.checked) darkmode();
    else lightmode();
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={(e) => togletheme(e)}
      />
      <label className="dark_mode_label" for="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
