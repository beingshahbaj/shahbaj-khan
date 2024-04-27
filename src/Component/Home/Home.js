import React from "react";
import "./Home.css";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button, FloatButton } from "antd";
import { Link } from "react-router-dom";
import Svg from "./undraw_programming_re_kg9v.svg";
import { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import Cryptoproject from "../Cryptoproject";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const comp = useRef(null);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const hasAnimationRun = sessionStorage.getItem("animationHasRun");
    if (!hasAnimationRun) {
      let ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        t1.to(".welcome-layer", {
          yPercent: "100",
          duration: 1,
        })
          .to("#wel", {
            fontSize: "20rem",
            // opacity: 0,
          })
          .to(".welcome-layer", {
            yPercent: "-100",
            duration: 1.3,
            delay: 1,
          })
          .from(["#titel-1", "#titel-2", "#titel-3"], {
            opacity: 0,
            y: "+=30",
            stagger: 0.5,
          })
          .from("#para", {
            opacity: 0,
            y: "+=30",
          });
      }, comp);
      sessionStorage.setItem("animationHasRun", "true");
      return () => ctx.revert();
    }
  }, []);

  return (
    <>
      <motion.div
        className="home"
        ref={comp}
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        transition={{ duration: 0.3 }}
      >
        <div ref={scrollRef} className="welcome-layer">
          <h1 id="wel">welcome</h1>
        </div>

        <section style={{ height: "87vh" }}>
          <div>
            <div className="Hero">
              <img src={Svg} alt="" />
              <div className="discription">
                <h1 id="titel-1">
                  hello, I' am <strong>Shahbaj khan</strong>
                </h1>
                <h1 id="titel-2">
                  <strong>Forntend</strong> <span>Developer</span>
                </h1>
                <h1 id="titel-3">
                  Based In <strong> noida India.</strong>
                </h1>
                <p id="para">
                  <b> Hey, I'm Shahbaj khan, </b>a MERN stack developer who's
                  all about making cool websites. using Welcome to my little web
                  space where I blend tech with creativity!
                </p>
                <Button className="resumebtn">
                  <a
                    href="https://beingshahbaj.github.io/blinkit-project-clone/"
                    target="_blank"
                  >
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      <motion.div className="scroll">
        <img src="assets\logo\html.png" alt="" />
        <img src="assets\logo\github-logo.png" alt="" />
        <img src="assets\logo\javascript.png" alt="" />
        <img src="assets\logo\css.png" alt="" />
        <img src="assets\logo\react.png" alt="" />
        <img src="assets\logo\tailwind-css.png" alt="" />
        <img src="assets\logo\github-logo.png" alt="" />
        <img src="assets\logo\bootstrap.png" alt="" />
      </motion.div>
      <div className="cryptoproject">
        <div className="feature">
          <h1>featured project</h1>
          <h3>Crypto Tracker Web App with Cutting-Edge Technologies</h3>
          <p>
            This comprehensive crypto tracker web application empowers you to
            stay informed about the ever-evolving cryptocurrency market. Built
            with a powerful combination of React, Axios, and the CoinGecko API,
            it delivers real-time data on a dynamic and visually appealing
            interface.
          </p>
          <ul>
            <li>
              {" "}
              Tracks crypto <strong>prices, market cap,</strong> and volume in
              real-time using <strong> CoinGecko API.</strong>
            </li>
            <li>
              Visualizes trends with interactive charts powered by{" "}
              <strong>Chart.js.</strong>
            </li>
            <li>
              Provides a user-friendly interface built with React and styled
              with <strong>MUI & AntD.</strong>
            </li>
            <li>
              Features smooth animations for an engaging experience{" "}
              <strong>(Framer Motion).</strong>
            </li>
            <li>
              Offers helpful notifications with <strong>Toastify</strong>.
            </li>
            <li>
              <strong>Axios</strong> is used to fetch data from the API.
            </li>
            {/* project link */}
            <Button className="projectlink">
              <a href="https://cryptotrackerr-app.netlify.app/" target="_blank">
                Go to live project
              </a>
            </Button>
          </ul>
        </div>
        <div className="images">
          <div className="image">
            <div className="first">
              <a href="#">
                <img
                  src="assets\project image\Screenshot 2024-03-28 223147.png"
                  alt=""
                />
              </a>
            </div>
            <div className="image-box">
              <div>
                <img src="assets\project image\image.png" alt="" />
              </div>

              <div>
                {" "}
                <img src="assets\project image\image.png" alt="" />{" "}
              </div>
              <div>
                {" "}
                <img src="assets\project image\image.png" alt="" />{" "}
              </div>
              <div>
                {" "}
                <img src="assets\project image\image.png" alt="" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
