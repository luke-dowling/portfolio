import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import { Homepage } from "../components/Homepage";
import { About } from "../components/About";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact";

export const Routing = () => {
  let location = useLocation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const windowResizeHandler = () => {
    console.log(windowWidth);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("this runs");
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
          path="/"
          element={<Homepage screenWidth={windowWidth} />}
        />
        <Route
          exact
          path="/about"
          element={<About screenWidth={windowWidth} />}
        />
        <Route
          exact
          path="/projects"
          element={<Projects screenWidth={windowWidth} />}
        />
        <Route
          exact
          path="/contact"
          element={<Contact screenWidth={windowWidth} />}
        />
      </Routes>
    </AnimatePresence>
  );
};
