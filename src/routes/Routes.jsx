import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import { Homepage } from "../components/Homepage";
import { About } from "../components/About";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact";
import Error404 from "../components/Error404";

export const Routing = () => {
  let location = useLocation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const windowResizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);
    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, [windowWidth]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          index={true}
          element={<Homepage screenWidth={windowWidth} />}
        />
        <Route path="/about" element={<About screenWidth={windowWidth} />} />
        <Route
          path="/projects"
          element={<Projects screenWidth={windowWidth} />}
        />
        <Route
          path="/contact"
          element={<Contact screenWidth={windowWidth} />}
        />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
};
