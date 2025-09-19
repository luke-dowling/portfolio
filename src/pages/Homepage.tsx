import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { PageTransitionAnimation } from "../Animations/PageTransitionAnimation";
import { homePageAnimationDesktop } from "../Animations/pageAnimation";
import { nameAnimation, jobAnimation } from "../Animations/homeAnimations";
import { Nav } from "../components/Nav.tsx";
import { FiArrowLeft } from "react-icons/fi";

export const Homepage = () => {
  return (
    // <PageTransitionAnimation>
    <div className="container container-dark util__scroll-snap">
      <Nav theme="light" />
      <section className="layout home">
        <motion.h1
          className="wrap"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Luke Dowling<span>.</span>
        </motion.h1>
        <motion.div
          className="home__job-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <hr />
          <p className="wrap">
            <span>Website</span> <span>Developer</span>
          </p>
        </motion.div>
        <motion.div
          className="home__more"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.85, 1] }}
          // whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          // viewport={{ once: false, amount: 0.5 }}
        >
          <FiArrowLeft
            style={{ fontSize: "1.8rem", verticalAlign: "middle" }}
          />
          <p>more about me</p>
        </motion.div>
      </section>
      <section className="layout home">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Hey there<span>.</span>
        </motion.h2>
        <motion.div
          className="home__about-me"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p>
            I'm Luke, a <span>Website Developer</span>
          </p>
          <p>
            I'm a full stack web developer based in Hamburg, passionate about
            building modern, responsive websites and web applications
          </p>
        </motion.div>
        <motion.div
          className="util__button-group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Link to="/projects">
            <button>Projects</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
        </motion.div>
      </section>
    </div>
    // </PageTransitionAnimation>
  );
};
