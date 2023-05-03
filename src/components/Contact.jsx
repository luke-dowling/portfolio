import { motion } from "framer-motion";
import { PageTransitionAnimation } from "./Animations/PageTransitionAnimation";
import { Nav } from "./Nav";

import { contactPageAnimation } from "./Animations/pageAnimation";
import {
  contactLayoutAnimation,
  contactItemAnimation,
} from "./Animations/contactAnimation";

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <PageTransitionAnimation animation={contactPageAnimation}>
      <motion.div
        className="container contact"
        variants={contactLayoutAnimation}
      >
        <Nav theme="light" />
        <motion.div
          className="contact__container-text"
          variants={contactItemAnimation}
        >
          <h1>Lets talk</h1>
          <p>
            If you are interested in working together or have ay feedback, I
            would love to hear it!
          </p>
        </motion.div>
        <motion.div
          className="contact__container-form"
          variants={contactItemAnimation}
        >
          {" "}
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" rows="3"></textarea>
            <button>Submit</button>
          </form>
        </motion.div>
      </motion.div>
    </PageTransitionAnimation>
  );
};
