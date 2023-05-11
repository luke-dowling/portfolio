import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageTransitionAnimation } from "./Animations/PageTransitionAnimation";
import { homePageAnimationDesktop } from "./Animations/pageAnimation";
import { nameAnimation, jobAnimation } from "./Animations/homeAnimations";
import { Nav } from "./Nav";

export const Homepage = () => {
  return (
    <PageTransitionAnimation animation={homePageAnimationDesktop}>
      <div className="container">
        <div className="layout main-layout home">
          <Nav theme="dark" />
          <div className="home-container home-container-left">
            <motion.h1 variants={nameAnimation} className="home-title home__h1">
              <Link to="/about" className="link--light">
                Luke Dowling
              </Link>
            </motion.h1>
          </div>
          <div className="home-container home-container-right">
            <motion.h2 variants={jobAnimation} className="home-title home__h2">
              <Link to="/projects" className="link--dark">
                Website Developer
              </Link>
            </motion.h2>
          </div>
        </div>
      </div>
    </PageTransitionAnimation>
  );
};
