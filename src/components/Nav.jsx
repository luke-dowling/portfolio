import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  navContainerAnimation,
  mobileNavContainerAnimation,
  navItemAnimation,
} from "./Animations/navAnimation";
import { Link } from "react-router-dom";

const Modal = ({ theme, handleClick }) => {
  const mobileTheme = theme === "light" ? "dark" : "light";

  return (
    <>
      <motion.ul
        className={`modal-nav modal-nav-${theme}`}
        variants={mobileNavContainerAnimation}
      >
        <motion.li variants={navItemAnimation}>
          <Link to="/" className={`link--${mobileTheme}`}>
            home
          </Link>
        </motion.li>
        <motion.li variants={navItemAnimation}>
          <Link to="/about" className={`link--${mobileTheme}`}>
            about
          </Link>
        </motion.li>
        <motion.li variants={navItemAnimation}>
          <Link to="/projects" className={`link--${mobileTheme}`}>
            projects
          </Link>
        </motion.li>
        <motion.li variants={navItemAnimation}>
          <Link to="/contact" className={`link--${mobileTheme}`}>
            contact
          </Link>
        </motion.li>
        <motion.li variants={navItemAnimation}>
          <a
            href="https://github.com/luke-dowling"
            target="_blank"
            rel="noreferrer"
            className={`link--${mobileTheme}`}
          >
            <GitHubIcon style={{ fontSize: "35px" }} />
          </a>
        </motion.li>
        <motion.li variants={navItemAnimation}>
          <a
            href="https://www.linkedin.com/in/luke-dowling-760840147/"
            target="_blank"
            rel="noreferrer"
            className={`link--${mobileTheme}`}
          >
            <LinkedInIcon style={{ fontSize: "35px" }} />
          </a>
        </motion.li>
      </motion.ul>
      <div className="modal-overlay" onClick={handleClick}></div>
    </>
  );
};

export const Nav = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {window.innerWidth < 769 ? (
        <nav>
          {!isOpen ? (
            <MenuIcon style={{ fontSize: "35px" }} onClick={handleClick} />
          ) : (
            <Modal theme={theme} handleClick={handleClick} />
          )}
        </nav>
      ) : (
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
      )}
    </>
  );
};
