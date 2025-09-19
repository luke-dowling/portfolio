import "./scss/App.scss";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import { Homepage } from "./pages/Homepage.tsx";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export default function App() {
  let location = useLocation();

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const windowResizeHandler = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", windowResizeHandler);
  //   return () => {
  //     window.removeEventListener("resize", windowResizeHandler);
  //   };
  // }, [windowWidth]);

  return (
    // <AnimatePresence exitBeforeEnter>
    <Routes>
      <Route path="/" index={true} element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    // </AnimatePresence>
  );
}
