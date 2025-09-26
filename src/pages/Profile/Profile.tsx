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

export const Profile = () => {
  console.log(window);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    pageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [window.location.pathname]);

  return (
    <PageTransitionAnimation>
      <div ref={pageRef} className="container container-dark about">
        <Nav theme="light" />
        <motion.div variants={aboutLayoutAnimation}>
          <motion.h1 variants={aboutItemAnimation}>
            Profile<span>.</span>
          </motion.h1>

          <motion.div variants={aboutItemAnimation} className="intro">
            <div className="img-container">
              <img src={headshot} alt="Luke Dowlings headshot" />
            </div>
            <h2>Luke 👨‍💻💃🎲</h2>
            <p>web_developer/tap_dancer/nerd</p>
          </motion.div>

          <motion.p variants={aboutItemAnimation}>
            I actually used to be a musical theatre performer before I made a
            career change in 2020. Now, I am a full time programmer who can tap
            dance and play the piano.
          </motion.p>
          <motion.p variants={aboutItemAnimation}>
            No matter how much I progress in the world of computer science,
            there will always be more to learn and that is something that drives
            me forward, that and the satisfaction of my mates thinking I can fix
            any gadget.
          </motion.p>
          <motion.p variants={aboutItemAnimation}>
            But in all seriousness, I am always happy to collaborate on
            projects, if you want to reach out, please go to my contact page
            where I look forward to hearing from you!
          </motion.p>
          <motion.p variants={aboutItemAnimation}>Peace & code.</motion.p>

          <motion.div variants={aboutItemAnimation} className="button-group">
            <Link to="/projects">
              <button>
                {" "}
                <FiArrowLeft style={{ verticalAlign: "middle" }} /> experience
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
      </div>
    </PageTransitionAnimation>
  );
};
