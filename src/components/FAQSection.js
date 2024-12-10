import React from "react";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { scroll } from "../animation";

const FAQSection = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      variants={scroll}
      ref={element}
      animate={controls}
      initial="hidden"
      className="faq"
    >
      <h2>
        Any <span>Questions</span>
      </h2>
      <LayoutGroup>
        <Toggle title="What Programming Languages Do You Use?">
          <div className="answer">
            <p>I primarily work with JavaScript, Python, and Java.</p>
            <p>
              For front-end development, I use React.js. For back-end
              development, I often work with Node.js, Python and Django.
            </p>
          </div>
        </Toggle>

        <Toggle title="How Do You Approach Problem-Solving?">
          <div className="answer">
            <p>
              I follow a systematic approach to problem-solving: understanding
              the problem, breaking it down into smaller tasks, and tackling
              each part methodically.
            </p>
            <p>
              I also use debugging tools, write test cases, and seek feedback
              from peers to ensure robust solutions.
            </p>
          </div>
        </Toggle>
        <Toggle title="How Can We Collaborate on a Project?">
          <div className="answer">
            <p>
              {" "}
              I typically collaborate using tools like GitHub for version
              control, Trello or Jira for project management, and Slack or email
              for communication.
            </p>
            <p>
              I'm open to remote or hybrid collaboration and prefer using agile
              methodologies for project workflows.
            </p>
          </div>
        </Toggle>
      </LayoutGroup>
    </motion.div>
  );
};

export default FAQSection;
