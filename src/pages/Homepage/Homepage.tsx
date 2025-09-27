import "./_homepage.scss";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { PageTransitionAnimation } from "../../Animations/PageTransitionAnimation.tsx";
import { homePageAnimationDesktop } from "../../Animations/pageAnimation.js";
import {
  nameAnimation,
  jobAnimation,
} from "../../Animations/homeAnimations.js";
import { Nav } from "@components/Nav/Nav.tsx";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useEffect, useState, useRef, use } from "react";
import { set } from "react-hook-form";
import { Footer } from "@/components/Footer/Footer.tsx";

export const Homepage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  // Update visibility based on scroll direction
  useEffect(() => {
    pageRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsVisible(true);
  }, [window.location.pathname]);

  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  // Track scroll direction
  useMotionValueEvent(scrollY, "change", (current) => {
    const prevY = scrollY.getPrevious() ?? 0;
    if (current > prevY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <PageTransitionAnimation
      ref={pageRef}
      classList="container container-dark util__scroll-snap home"
    >
      <Nav theme="light" />
      <section>
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
          initial={{ opacity: 0, x: -20 }}
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
          animate={{
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            duration: isVisible ? 1 : 0.2,
            delay: isVisible ? 1 : 0,
          }}
        >
          <FiArrowLeft
            style={{ fontSize: "1.8rem", verticalAlign: "middle" }}
          />
          <p>more about me</p>
        </motion.div>
      </section>
      <section>
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
            building modern, responsive websites and web applications.
          </p>
        </motion.div>
        <motion.div
          className="button-group last-item-on-page"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Link to="/projects">
            <button>
              {" "}
              <FiArrowLeft style={{ verticalAlign: "middle" }} /> projects
            </button>
          </Link>
          <Link to="/profile">
            <button>
              profile <FiArrowRight style={{ verticalAlign: "middle" }} />
            </button>
          </Link>
        </motion.div>
        <Footer />
      </section>
    </PageTransitionAnimation>
  );
};
