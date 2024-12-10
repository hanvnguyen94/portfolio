import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;

    let templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_momykq8",
        "template_2j5h4nq",
        templateParams,
        "user_ycQPTV0vafFFz8v5UVteS"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Email sent successfully!");
          this.resetForm();
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className="about"
      >
        <div className="description">
          <div className="hide">
            <motion.h2 variants={titleAnimation}>
              Get in <span>touch</span>.
            </motion.h2>
          </div>
          <div className="hide">
            <div className="form-container">
              <motion.div className="form-wrapper">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <motion.h5>Email address</motion.h5>
                    <input
                      required
                      type="email"
                      name="email"
                      value={this.state.email}
                      className="text-input"
                      onChange={this.handleChange.bind(this, "email")}
                      placeholder="Your email"
                    />
                  </div>
                  <div className="form-group">
                    <motion.h5>Name</motion.h5>
                    <input
                      required
                      type="text"
                      name="name"
                      value={this.state.name}
                      className="text-input"
                      onChange={this.handleChange.bind(this, "name")}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <motion.h5>Message</motion.h5>
                    <textarea
                      required
                      placeholder="Enter your message"
                      name="message"
                      className="text-input"
                      value={this.state.message}
                      onChange={this.handleChange.bind(this, "message")}
                    />
                  </div>
                  <motion.button type="submit">Submit</motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default ContactForm;
