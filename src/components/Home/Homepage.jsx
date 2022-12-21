import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageTransitionAnimation } from "../Animations/PageTransitionAnimation";
import {
  homePageAnimationMobile,
  homePageAnimationDesktop,
} from "../Animations/pageAnimation";
import { nameAnimation, jobAnimation } from "../Animations/homeAnimations";
import { Nav } from "../Nav/Nav";

export const Homepage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const windowResizeHandler = () => {
    console.log(windowWidth);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("this runs");
    window.addEventListener("resize", windowResizeHandler);
    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, [windowWidth]);

  return (
    <PageTransitionAnimation
      animation={
        windowWidth > 679 ? homePageAnimationDesktop : homePageAnimationMobile
      }
    >
      <div className="container">
        <Nav theme="dark" />
        <motion.h1 variants={nameAnimation} className="home--title home__h1">
          <Link to="/about" className="link--light">
            Luke Dowling
          </Link>
        </motion.h1>
        <motion.h2 variants={jobAnimation} className="home--title home__h2">
          <Link
            to="/projects"
            className={`link--${windowWidth > 679 ? "dark" : "light"}`}
          >
            Website Developer
          </Link>
        </motion.h2>
      </div>
    </PageTransitionAnimation>
  );
};
