import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingScreen from "./Component/Common/Loding";
import Navbar from "./Component/Navbar/mobilenav";
import Lapbar from "./Component/Navbar/Lapbar";

const Home = React.lazy(() => import("./Component/Home/Home"));
const About = React.lazy(() => import("./Component/About/About"));
const Work = React.lazy(() => import("./Component/Work/Work"));
const Contact = React.lazy(() => import("./Component/Contact/Contact"));
const Services = React.lazy(() => import("./Component/Service/Services"));
const Blog = React.lazy(() => import("./Component/Blog/Blog"));

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
