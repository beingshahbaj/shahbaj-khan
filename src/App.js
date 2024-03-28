import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/mobilenav";
import Lapbar from "./Component/Lapbar";
import LoadingScreen from "./Component/Loding";

const Home = React.lazy(() => import("./Component/Home"));
const About = React.lazy(() => import("./Component/About"));
const Work = React.lazy(() => import("./Component/Work"));
const Contact = React.lazy(() => import("./Component/Contact"));
const Services = React.lazy(() => import("./Component/Services"));
const Blog = React.lazy(() => import("./Component/Blog"));

function App() {
  return (
    <div>
      <Lapbar />
      <Navbar className="mobile-bar" />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Work" element={<Work />} />
          <Route path="Services" element={<Services />} />
          <Route path="Blog" element={<Blog />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
