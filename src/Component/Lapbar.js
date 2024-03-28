import React from "react";
import Navbar from "./mobilenav";
import DarkMode from "./DarkMode/DarkMode";
function Lapbar() {
  return (
    <div>
      <svg
        id="wave"
        style={{
          transform: "rotate(180deg)",
          transition: "0.3s",
          top: "0",
          left: "0",
          position: "absolute",
          zIndex: "-1",
          width: "100vw !importent",
        }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(244, 0, 0, 1)" offset="0%" />
            <stop stopColor="rgba(148.311, 0, 0, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,14L24,11.7C48,9,96,5,144,11.7C192,19,240,37,288,58.3C336,79,384,103,432,105C480,107,528,89,576,74.7C624,61,672,51,720,51.3C768,51,816,61,864,67.7C912,75,960,79,1008,77C1056,75,1104,65,1152,63C1200,61,1248,65,1296,56C1344,47,1392,23,1440,14C1488,5,1536,9,1584,16.3C1632,23,1680,33,1728,32.7C1776,33,1824,23,1872,18.7C1920,14,1968,14,2016,32.7C2064,51,2112,89,2160,88.7C2208,89,2256,51,2304,30.3C2352,9,2400,5,2448,16.3C2496,28,2544,56,2592,65.3C2640,75,2688,65,2736,56C2784,47,2832,37,2880,35C2928,33,2976,37,3024,32.7C3072,28,3120,14,3168,25.7C3216,37,3264,75,3312,74.7C3360,75,3408,37,3432,18.7L3456,0L3456,140L3432,140C3408,140,3360,140,3312,140C3264,140,3216,140,3168,140C3120,140,3072,140,3024,140C2976,140,2928,140,2880,140C2832,140,2784,140,2736,140C2688,140,2640,140,2592,140C2544,140,2496,140,2448,140C2400,140,2352,140,2304,140C2256,140,2208,140,2160,140C2112,140,2064,140,2016,140C1968,140,1920,140,1872,140C1824,140,1776,140,1728,140C1680,140,1632,140,1584,140C1536,140,1488,140,1440,140C1392,140,1344,140,1296,140C1248,140,1200,140,1152,140C1104,140,1056,140,1008,140C960,140,912,140,864,140C816,140,768,140,720,140C672,140,624,140,576,140C528,140,480,140,432,140C384,140,336,140,288,140C240,140,192,140,144,140C96,140,48,140,24,140L0,140Z"
        />
      </svg>
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
