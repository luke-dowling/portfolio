import "./_nav.scss";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdExit } from "react-icons/io";

import {
  navContainerAnimation,
  mobileNavContainerAnimation,
  navItemAnimation,
  navIconAnimation,
} from "../../Animations/navAnimation";
import { Link } from "react-router-dom";

import type { Theme } from "../../types.ts";
import { useTheme } from "@/hooks/useThemeContext.ts";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch.tsx";

interface NavProps {
  theme: Theme;
}

interface ModalProps extends NavProps {
  handleClick: () => void;
}

const Modal = ({ theme, handleClick }: ModalProps) => {
  const mobileTheme = theme === "light" ? "dark" : "light";

  return (
    <>
      <motion.ul className={`modal-nav`} variants={mobileNavContainerAnimation}>
        <motion.li variants={navItemAnimation}>
          <Link to="/" className={`link--${mobileTheme}`}>
            home
          </Link>
        </motion.li>
        <motion.li variants={navItemAnimation}>
          <Link to="/profile" className={`link--${mobileTheme}`}>
            profile
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
            <FaGithubSquare />
          </a>
        </motion.li>
        <motion.li variants={navItemAnimation}>
          <a
            href="https://www.linkedin.com/in/luke-dowling-760840147/"
            target="_blank"
            rel="noreferrer"
            className={`link--${mobileTheme}`}
          >
            <FaLinkedin />
          </a>
        </motion.li>
      </motion.ul>
      <div className="modal-overlay" onClick={handleClick}></div>
    </>
  );
};

export const Nav = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`nav nav-${theme}`}>
      {/* mobile Nav */}
      <div className="mobile">
        <Link to="/">lukeDowling</Link>
        <motion.div
          className={`nav-icons link--${
            isOpen ? (theme === "light" ? "dark" : "light") : theme
          }`}
        >
          <ThemeSwitch />
          {!isOpen ? (
            <RiMenu2Line onClick={handleClick} />
          ) : (
            <IoMdExit
              style={{ fontSize: "35px", zIndex: 30, position: "relative" }}
              onClick={handleClick}
            />
          )}
        </motion.div>

        {isOpen ? <Modal theme={theme} handleClick={handleClick} /> : null}
      </div>

      {/* Desktop Nav */}
      <motion.ul className="desktop" variants={mobileNavContainerAnimation}>
        <div>
          <motion.li variants={navItemAnimation}>
            <Link to="/" className={`link--${theme}`}>
              home
            </Link>
          </motion.li>
          <motion.li variants={navItemAnimation}>
            <Link to="/profile" className={`link--${theme}`}>
              profile
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
        </div>
        <div>
          <motion.li variants={navItemAnimation} className="nav-button-group">
            <ThemeSwitch />
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
        </div>
      </motion.ul>
    </nav>
  );
};
