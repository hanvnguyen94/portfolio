import React from "react";
//page components
import AboutSection from "../components/AboutSection";
import "./Layout.css";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollToTop from "../components/ScrollToTop";

const About = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* rendering all sections of the page here */}
      <AboutSection />
      <ScrollToTop />
    </motion.div>
  );
};

export default About;
