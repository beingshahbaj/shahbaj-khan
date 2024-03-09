import React from "react";
import Buttons from "./Buttons";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const comp = useRef(null);

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

      <section className="Hero">
        <img src="assets\illustration\Programmer.gif" alt=""></img>

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
            about making cool websites. Welcome to my little web space where I
            blend tech with creativity!
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
