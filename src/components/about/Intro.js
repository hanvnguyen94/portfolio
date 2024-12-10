import React from "react";
import profileGreen from "../../assets/img/profile-green.png";
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnimation } from "../../animation";

const Intro = () => {
  const introContent = {
    image: profileGreen,
    name: "Han Nguyen",
    designation: "Software Developer",
    text: (
      <>
        <p>
          Hi, my name is Han Nguyen and I am an experienced software developer
          with a flair for creating elegant solutions. Knowledgeable in user
          interface, testing, and debugging processes. My ideal position will
          allow me to learn and grow; all while continuing to write clean,
          elegant, and efficient code.
        </p>
        <p>
          Currently pursuing higher education at Boston University's Master of
          Science in Software Development as a part-time student.
        </p>
      </>
    ),
  };

  return (
    <motion.div variants={pageAnimation}>
      <div className="top_author_image">
        <motion.img
          variants={photoAnimation}
          src={introContent.image}
          alt="profile"
        />
      </div>
      <motion.div variants={fade} className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </motion.div>
      <div className="about_text">{introContent.text}</div>
    </motion.div>
  );
};

export default Intro;
