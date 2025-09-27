import "./_profile.scss";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import headshot from "@/images/headshot.jpg";
import { PageTransitionAnimation } from "../../Animations/PageTransitionAnimation";
import { aboutPageAnimation } from "../../Animations/pageAnimation";
import { Nav } from "@components/Nav/Nav";

import {
  aboutLayoutAnimation,
  aboutItemAnimation,
} from "../../Animations/aboutAnimation";
import { Footer } from "@/components/Footer/Footer";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export const Profile = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollToTop(pageRef);

  return (
    <PageTransitionAnimation
      ref={pageRef}
      classList="container container-dark profile"
    >
      <Nav theme="light" />
      <motion.div variants={aboutLayoutAnimation}>
        <motion.h1 variants={aboutItemAnimation}>
          Profile<span>.</span>
        </motion.h1>

        <motion.div variants={aboutItemAnimation} className="intro">
          <div className="img-container">
            <img src={headshot} alt="Luke Dowlings headshot" />
          </div>
          <h2>Luke 👨‍💻🕺</h2>
          <p>web_dev / creative_coder / tap_dancer</p>
        </motion.div>

        <motion.p variants={aboutItemAnimation}>
          I’m a fullstack web developer passionate about building creative,
          user-focused applications that make a real impact.
        </motion.p>
        <motion.p variants={aboutItemAnimation}>
          I love exploring new technologies, experimenting with ideas, and
          writing clean, maintainable code.
        </motion.p>
        <motion.p variants={aboutItemAnimation}>
          Before stepping into the world of software engineering, I was a
          performer— so I might just be the only developer you’ll meet who can
          tap dance 😉
        </motion.p>
        <motion.p
          className="orange-line profile-tag-line"
          variants={aboutItemAnimation}
        >
          Peace & code ✌️
        </motion.p>

        <motion.div
          variants={aboutItemAnimation}
          className="button-group last-item-on-page"
        >
          <Link to="/projects">
            <button>
              {" "}
              <FiArrowLeft style={{ verticalAlign: "middle" }} /> projects
            </button>
          </Link>
          <Link to="/contact">
            <button>
              contact <FiArrowRight style={{ verticalAlign: "middle" }} />
            </button>
          </Link>
        </motion.div>
      </motion.div>
      <Footer />
    </PageTransitionAnimation>
  );
};
