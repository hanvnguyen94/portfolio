import React from "react";
import FAQSection from "../components/FAQSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollToTop from "../components/ScrollToTop";

const FAQPage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="faq"
    >
      <FAQSection />
      <ScrollToTop />
    </motion.div>
  );
};

export default FAQPage;
