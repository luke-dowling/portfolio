import { PageTransitionAnimation } from "../Animations/PageTransitionAnimation";
import { aboutPageAnimation } from "../Animations/pageAnimation";
import { Nav } from "../components/Nav";
import { motion } from "framer-motion";
import {
  aboutLayoutAnimation,
  aboutItemAnimation,
} from "../Animations/aboutAnimation";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  const onClickHandler = (path: string) => {
    navigate(path);
  };

  return (
    <PageTransitionAnimation>
      <div className="container">
        <div className="layout main-layout">
          <Nav theme="light" />
          <motion.div
            className="page-container flex-container-column-sb about"
            variants={aboutLayoutAnimation}
          >
            <motion.h1 variants={aboutItemAnimation}>About.</motion.h1>
            <div>
              <motion.p variants={aboutItemAnimation}>
                I actually used to be a musical theatre performer before I made
                a career change in 2020. Now, I am a full time programmer who
                can tap dance and play the piano.
              </motion.p>
              <motion.p variants={aboutItemAnimation}>
                No matter how much I progress in the world of computer science,
                there will always be more to learn and that is something that
                drives me forward, that and the satisfaction of my mates
                thinking I can fix any gadget.
              </motion.p>
              <motion.p variants={aboutItemAnimation}>
                But in all seriousness, I am always happy to collaborate on
                projects, if you want to reach out, please go to my contact page
                where I look forward to hearing from you!
              </motion.p>
              <motion.p variants={aboutItemAnimation}>Peace & code.</motion.p>
            </div>
            <motion.div
              variants={aboutItemAnimation}
              className="flex-container-sb"
            >
              <motion.button onClick={() => onClickHandler("/projects")}>
                Projects
              </motion.button>

              <motion.button onClick={() => onClickHandler("/contact")}>
                Contact
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransitionAnimation>
  );
};
