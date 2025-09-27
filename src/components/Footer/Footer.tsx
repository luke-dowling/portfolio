import "./_footer.scss";

import { FaCodepen, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <h3 className="footer-heading">@2025 luke-dowling</h3>
        <div className="icons">
          <a
            href="https://github.com/luke-dowling"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/luke-dowling-760840147/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://codepen.io/luke-dowling"
            target="_blank"
            rel="noreferrer"
          >
            <FaCodepen />
          </a>
          <a
            href="https://www.instagram.com/lukedowling93/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};
