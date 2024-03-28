import React from "react";
import Buttons from "./Buttons";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Link } from "react-router-dom";
const Home = () => {
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
    <motion.div
      className="home"
      ref={comp}
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.3 }}
    >
      <div className="welcome-layer">
        <h1 id="wel">welcome</h1>
      </div>

      <section style={{ height: "87vh" }}>
        <div>
          <div>
            <svg
              id="wave"
              style={{
                transition: "0.3s",
                position: "fixed",
                zIndex: "-1",
                bottom: "0",
              }}
              viewBox="0 0 1540 380"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                  <stop stopColor="#0466c8" offset="0%" />
                  <stop stopColor="#003566" offset="100%" />
                </linearGradient>
              </defs>
              <path
                style={{ transform: "translate(0, 0px)", opacity: 1 }}
                fill="url(#sw-gradient-0)"
                d="M0,0L240,65.3C480,131,960,261,1440,310.3C1920,359,2400,327,2880,310.3C3360,294,3840,294,4320,253.2C4800,212,5280,131,5760,130.7C6240,131,6720,212,7200,261.3C7680,310,8160,327,8640,302.2C9120,278,9600,212,10080,228.7C10560,245,11040,343,11520,383.8C12000,425,12480,408,12960,375.7C13440,343,13920,294,14400,236.8C14880,180,15360,114,15840,114.3C16320,114,16800,180,17280,245C17760,310,18240,376,18720,408.3C19200,441,19680,441,20160,392C20640,343,21120,245,21600,228.7C22080,212,22560,278,23040,269.5C23520,261,24000,180,24480,138.8C24960,98,25440,98,25920,155.2C26400,212,26880,327,27360,367.5C27840,408,28320,376,28800,375.7C29280,376,29760,408,30240,383.8C30720,359,31200,278,31680,261.3C32160,245,32640,294,33120,302.2C33600,310,34080,278,34320,261.3L34560,245L34560,490L34320,490C34080,490,33600,490,33120,490C32640,490,32160,490,31680,490C31200,490,30720,490,30240,490C29760,490,29280,490,28800,490C28320,490,27840,490,27360,490C26880,490,26400,490,25920,490C25440,490,24960,490,24480,490C24000,490,23520,490,23040,490C22560,490,22080,490,21600,490C21120,490,20640,490,20160,490C19680,490,19200,490,18720,490C18240,490,17760,490,17280,490C16800,490,16320,490,15840,490C15360,490,14880,490,14400,490C13920,490,13440,490,12960,490C12480,490,12000,490,11520,490C11040,490,10560,490,10080,490C9600,490,9120,490,8640,490C8160,490,7680,490,7200,490C6720,490,6240,490,5760,490C5280,490,4800,490,4320,490C3840,490,3360,490,2880,490C2400,490,1920,490,1440,490C960,490,480,490,240,490L0,490Z"
              />
            </svg>
          </div>
          <div className="Hero">
            <img
              src="assets\illustration\Person-Working-At-Standing-Desk-freesvgillustration.com\Person-Working-At-Standing-Desk.png"
              alt=""
            ></img>

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
                <b> Hey, I'm Shahbaj khan, </b>a MERN stack developer who's all
                about making cool websites. using{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  [html , css , javascript , react]
                </span>{" "}
                Welcome to my little web space where I blend tech with
                creativity!
              </p>
              <Button
                style={{
                  fontWeight: "500",
                  position: "absolute",
                  bottom: "10%",
                  right: "10%",
                  width: "150px",
                  height: "40px",
                  background: "var(--body_color)",
                  color: "var(--body_background)",
                  border: "none",
                  outline: "none",
                }}
              >
                <a
                  href="https://beingshahbaj.github.io/blinkit-project-clone/"
                  target="_blank"
                >
                  se my resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
