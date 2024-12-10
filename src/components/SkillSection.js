import React from "react";
// icons
import js from "../images/icons/js.svg";
import react from "../images/icons/react.svg";
import python from "../images/icons/python.svg";
import django from "../images/icons/django.svg";
import jquery from "../images/icons/jquery.svg";
import html from "../images/icons/html.svg";
import css from "../images/icons/css.svg";
import postgresql from "../images/icons/postgresql.svg";
import mongodb from "../images/icons/mongodb.svg";
import bootstrap from "../images/icons/bootstrap.svg";
import node from "../images/icons/node.svg";
import git from "../images/icons/git.svg";
import uipath from "../images/icons/uipath.svg";

import { fade } from "../animation";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      className="services"
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <div className="skill-description">
        <motion.h2>
          My <span>skills</span>.
        </motion.h2>
        <div className="container">
          <div className="row">
            <div className="col icon">
              <img src={js} alt="" />
              <p>JavaScript</p>
            </div>
            <div className="col icon">
              <img src={react} alt="" />
              <p>React</p>
            </div>
            <div className="col icon">
              <img src={python} alt="" />
              <p>Python</p>
            </div>
          </div>

          <div className="row">
            <div className="col icon">
              <img src={django} alt="" />
              <p>Django</p>
            </div>
            <div className="col icon">
              <img src={jquery} alt="" />
              <p>jQuery</p>
            </div>
            <div className="col icon">
              <img src={node} alt="" />
              <p>Node</p>
            </div>
          </div>

          <div className="row">
            <div className="col icon">
              <img src={postgresql} alt="" />
              <p>PostgreSQL</p>
            </div>
            <div className="col icon">
              <img src={mongodb} alt="" />
              <p>MongoDB</p>
            </div>
            <div className="col icon">
              <img src={git} alt="" />
              <p>Git</p>
            </div>
          </div>

          <div className="row">
            <div className="col icon">
              <img src={html} alt="" />
              <p>HTML</p>
            </div>
            <div className="col icon">
              <img src={css} alt="" />
              <p>CSS</p>
            </div>
            <div className="col icon">
              <img src={bootstrap} alt="" />
              <p>Bootstrap</p>
            </div>
          </div>

          <div className="row">
            <div className="col icon">
              <img src={uipath} alt="" />
              <p style={{ paddingTop: 0 }}>UiPath</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
