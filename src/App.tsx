import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import { Homepage } from "@pages/Homepage/Homepage.tsx";
import { Profile } from "@/pages/Profile/Profile";
import { Projects } from "@pages/Projects/Projects.tsx";
import { Contact } from "@pages/Contact/Contact.tsx";
import { NotFound } from "@/pages/NotFound/NotFound.js";
import { Footer } from "./components/Footer/Footer";

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
    <>
      <Routes>
        <Route path="/" index={true} element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
    // </AnimatePresence>
  );
}
