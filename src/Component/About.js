import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  
  return (
    <motion.div
      className="about"
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.3 }}
    >
      <div className="profile">
        <div className="back-layer">
         <img></img>
        </div>
        <img src="assets\ei_1702042476351-removebg.png" alt=""></img>
        {/* write some text about me in h4 and h1 tag */}

        <div className="about-text">
          <div className="name">
            <h4>NICE TO MEET YOU!</h4>
            <h1>SHAHBAJ KHAN</h1>
            <h4>web designer & developer</h4>
          </div>
          <button>
            <Link to="/Work">project</Link>
          </button>
          <h1>
            <strong>
              Frontend <span>Developer</span>
            </strong>
            <br />
            <strong>
              Backend <span>Developer</span>
            </strong>
            <br />

            <strong>
              UI/UX <span>Designer</span>
            </strong>
            <br />
          </h1>
          <h4>
            I'am Shahbaj khan, a MERN stack developer who's all about making
            cool websites. Welcome to my little web space where I blend tech
            with creativity!{" "}
          </h4>
        </div>
      </div>
      <Link to="/blog">
        <i class="fa-solid fa-blog"></i>
        <h1>blog</h1>
      </Link>
    </motion.div>
  );
};
export default About;
