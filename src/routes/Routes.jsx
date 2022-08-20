import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Homepage } from "../components/Home/Homepage";
import { About } from "../components/About/About";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact/Contact";

export const Routing = () => {
  let location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};
