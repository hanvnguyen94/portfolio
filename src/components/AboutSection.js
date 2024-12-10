import React from "react";
import bioPhoto from "../images/bio/bio-photo.jpg";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="description">
        <motion.div>
          <div className="hide">
            <motion.h2 variants={titleAnimation}>My name is</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimation}>
              <span>Han Nguyen.</span>
            </motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          Experienced software developer with a flair for creating elegant
          solutions based in New Hampshire. Currenly working as a Computer
          Scientist for the U.S. Army Corps of Engineers - Cold Regions Research
          and Development Laboratory.
        </motion.p>
        <motion.a
          variants={fade}
          target="blank"
          href="https://github.com/hanvnguyen94"
        >
          <FontAwesomeIcon
            className="icon"
            style={{
              fontSize: "2rem",
              marginRight: "1.5rem",
              color: "white",
            }}
            icon={faGithub}
          />
        </motion.a>
        <motion.a
          variants={fade}
          target="blank"
          href="https://www.linkedin.com/in/hnguyen94/"
        >
          <FontAwesomeIcon
            className="icon"
            style={{
              fontSize: "2rem",
              marginRight: "1.5rem",
              color: "white",
            }}
            icon={faLinkedinIn}
          />
        </motion.a>
        <motion.a
          variants={fade}
          target="blank"
          href="https://www.instagram.com/han.dragonlady/"
        >
          <FontAwesomeIcon
            className="icon"
            style={{
              fontSize: "2rem",
              marginRight: "1.5rem",
              color: "white",
            }}
            icon={faInstagram}
          />
        </motion.a>
      </div>
      <div className="image">
        <motion.img
          variants={photoAnimation}
          src={bioPhoto}
          alt="profile-picture"
        />
      </div>
    </div>
  );
};

export default AboutSection;
