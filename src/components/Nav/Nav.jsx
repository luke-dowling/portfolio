import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import {
  navContainerAnimation,
  navItemAnimation,
} from "../Animations/navAnimation";
import { Link } from "react-router-dom";
import "./Nav.module.css";

export const Nav = ({ theme }) => {
  return (
    <nav>
      <motion.ul variants={navContainerAnimation}>
        <motion.li variants={navItemAnimation}>
          <Link to="/" className={`link--${theme}`}>
            home
          </Link>
        </motion.li>
        <motion.li variants={navItemAnimation}>
          <Link to="/about" className={`link--${theme}`}>
            about
          </Link>
        </motion.li>
        <motion.li variants={navItemAnimation}>
          <Link to="/projects" className={`link--${theme}`}>
            projects
          </Link>
        </motion.li>
        <motion.li variants={navItemAnimation}>
          <Link to="/contact" className={`link--${theme}`}>
            contact
          </Link>
        </motion.li>
        <motion.li variants={navItemAnimation} className="flex-container">
          <a
            href="https://github.com/luke-dowling"
            target="_blank"
            rel="noreferrer"
            className={`link--${theme}`}
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/luke-dowling-760840147/"
            target="_blank"
            rel="noreferrer"
            className={`link--${theme}`}
          >
            <FaLinkedin />
          </a>
        </motion.li>
      </motion.ul>
    </nav>
  );
};
