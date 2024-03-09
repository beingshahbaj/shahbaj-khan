import React from "react";

import Navbar from "./Component/mobilenav";

import Home from "./Component/Home";
import About from "./Component/About";
import Work from "./Component/Work";
import Contact from "./Component/Contact";
import Services from "./Component/Services";
import Blog from "./Component/Blog";
import "./index.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lapbar from "./Component/Lapbar";

function App() {
  return (
    <div>
      <Lapbar />
      <Navbar className="mobile-bar" />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
        <Route path="Work" element={<Work />}></Route>
        <Route path="Services" element={<Services />}></Route>
        <Route path="Blog" element={<Blog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
