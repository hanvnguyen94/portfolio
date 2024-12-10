import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Intro from "../components/about/Intro";
import Interest from "../components/about/Interest";
import Info from "../components/about/Info";
import Resume from "../components/about/Resume";
import Skills from "../components/about/Skills";
import ScrollToTop from "../components/ScrollToTop";

Modal.setAppElement("#root");

const AboutMain = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      {/* Intro section */}
      <div className="container">
        <div className="tm_about">
          <div className="tm_title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
              </div>
            </div>
          </div>
          <Intro />
          <div className="tm_short_info">
            <Info />
          </div>
          <div className="tm_button" data-position="left">
            <a href="assets/img/Resume_Nguyen_2023.pdf" download>
              <span>Download My CV</span>
            </a>
          </div>
        </div>
      </div>

      <div className="progressbox">
        <div className="container">
          <div className="in">
            <Skills />
          </div>
          {/* End in */}
        </div>
      </div>

      <div className="skillbox">
        <div className="container">
          <div className="in">
            <Interest />
          </div>
        </div>
      </div>

      <div className="resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div>
      {/* /ABOUT */}
      <ScrollToTop />
    </motion.div>
  );
};

export default AboutMain;
