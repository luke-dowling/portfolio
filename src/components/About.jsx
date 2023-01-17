import { PageTransitionAnimation } from "./Animations/PageTransitionAnimation";
import { aboutPageAnimation } from "./Animations/pageAnimation";
import { Nav } from "./Nav";
import { motion } from "framer-motion";
import {
  aboutLayoutAnimation,
  aboutItemAnimation,
} from "./Animations/aboutAnimation";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  const onClickHandler = (path) => {
    navigate(path);
  };

  return (
    <PageTransitionAnimation animation={aboutPageAnimation}>
      <Nav theme="light" />
      <motion.div className="container about" variants={aboutLayoutAnimation}>
        <motion.h1 variants={aboutItemAnimation} className="about__heading">
          Hey there!
        </motion.h1>
        <motion.p variants={aboutItemAnimation} className="about__text">
          I’m Luke, a fullstack web-dev with a passion for building and
          exploring.
        </motion.p>
        <motion.p variants={aboutItemAnimation} className="about__text">
          I have expertise in the <span>MERN</span> stack, however I’m very open
          for learning new technologies.
        </motion.p>
        <motion.p variants={aboutItemAnimation} className="about__text">
          When I’m not behind the desk, you’ll usually find me playing{" "}
          <span>D&D</span> or teaching <span>tap dance</span>.
        </motion.p>
        <motion.div
          variants={aboutItemAnimation}
          className="about__container-btn"
        >
          <motion.button
            className="about__btn"
            onClick={() => onClickHandler("/projects")}
          >
            See my projects
          </motion.button>

          <motion.button
            className="about__btn"
            onClick={() => onClickHandler("/contact")}
          >
            Get in touch
          </motion.button>
        </motion.div>
      </motion.div>
    </PageTransitionAnimation>
  );
};
