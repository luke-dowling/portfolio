import "./_footer.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <h3>@2025 luke-dowling</h3>
      <div className="icons">
        <FaGithub />
        <FaLinkedin />
      </div>
    </footer>
  );
};
