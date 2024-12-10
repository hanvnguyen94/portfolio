import React from "react";
import { Link } from "react-router-dom";
import ignite from "../images/project_thumbnails/ignite.jpg";
import beatMaker from "../images/project_thumbnails/beatMaker.jpg";
import musicPlayer from "../images/project_thumbnails/musicPlayer.jpg";
import loanCal from "../images/project_thumbnails/loanCalculator.jpg";

import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  // frameAnimation,
  // frameContainer,
} from "../animation";

import { useScroll } from "../components/useScroll";
import ScrollToTop from "../components/ScrollToTop";

const Work = () => {
  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
      className="work"
    >
      {/* <motion.div variants={frameContainer}>
        <motion.div variants={frameAnimation} className="frame1"></motion.div>
        <motion.div variants={frameAnimation} className="frame2"></motion.div>
        <motion.div variants={frameAnimation} className="frame3"></motion.div>
        <motion.div variants={frameAnimation} className="frame4"></motion.div>
      </motion.div> */}

      {/* project 1*/}
      <motion.div
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
        className="project"
      >
        <motion.h2 variants={fade}>Ignite</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/projects/ignite">
          <motion.div className="hide">
            <motion.img variants={photoAnimation} src={ignite} alt="ignite" />
          </motion.div>
        </Link>
        <p>
          Explore the latest game details and trends with a seamless and
          responsive UI.
        </p>
        <a
          style={{ marginRight: "1rem" }}
          target="blank"
          href="https://github.com/hanvnguyen94/ignite"
        >
          <button variants={fade}>Front-End Repo</button>
        </a>
      </motion.div>

      {/* project 2*/}
      <motion.div
        ref={element1}
        variants={fade}
        animate={controls1}
        initial="hidden"
        className="project"
      >
        <h2>Music Player</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/projects/music-player">
          <img src={musicPlayer} alt="musicPlayer" />
        </Link>
        <p variants={fade}>
          Enjoy a chill playlist and an intuitive music player interface
          designed for seamless listening.
        </p>
        <a
          variants={fade}
          style={{ marginRight: "1rem" }}
          target="blank"
          href="https://github.com/hanvnguyen94/jam-player"
        >
          <button variants={fade}>Front-End Repo</button>
        </a>
      </motion.div>

      {/* project 3*/}
      <motion.div
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
        className="project"
      >
        <h2>The Beat Maker</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/projects/beat-maker">
          <img src={beatMaker} alt="beatMaker" />
        </Link>
        <p>
          Create your own beats with an easy-to-use interface and share your
          creations with others.
        </p>
        <a
          style={{ marginRight: "1rem" }}
          target="blank"
          href="https://github.com/hanvnguyen94/the-beat-maker"
        >
          <button>Front-End Repo</button>
        </a>
      </motion.div>

      {/* project 4*/}
      <motion.div
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
        className="project"
      >
        <h2>Loan Calculator</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/projects/loan-calculator">
          <img src={loanCal} alt="loanCal" />
        </Link>
        <p>
          Quickly calculate your loan payments and visualize the payment
          breakdown
        </p>
        <a
          style={{ marginRight: "1rem" }}
          target="blank"
          href="https://github.com/hanvnguyen94/loan-calculator"
        >
          <button>Front-End Repo</button>
        </a>
      </motion.div>
      <ScrollToTop />
    </motion.div>
  );
};

export default Work;
