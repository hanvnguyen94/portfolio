import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <nav className="nav-bar">
      <h1>
        <Link to="/portfolio" id="logo">
          Portfolio
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/portfolio">Home</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/portfolio" ? "50%" : "0%" }}
            className="line"
          ></motion.div>
        </li>
        <li>
          <Link to="/about-me">About Me</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/about-me" ? "50%" : "0%" }}
            className="line"
          ></motion.div>
        </li>
        <li>
          <Link to="/projects">My Projects</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "50%" : "0%" }}
            className="line"
          ></motion.div>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
            className="line"
          ></motion.div>
        </li>
        <li>
          <Link to="/faq"> FAQ</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/faq" ? "50%" : "0%" }}
            className="line"
          ></motion.div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
