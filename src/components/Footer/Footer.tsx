import "./_footer.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-heading">@2025 luke-dowling</h3>
      <div className="icons">
        <FaGithub />
        <FaLinkedin />
      </div>
    </footer>
  );
};
