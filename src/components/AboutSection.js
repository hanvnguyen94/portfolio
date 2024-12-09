import React from "react";
import profile from "../images/profile.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>My name is</h2>
          </div>
          <div className="hide">
            <h2>
              <span>Han Nguyen.</span>
            </h2>
          </div>
          <div className="hide">
            <h2>A software developer.</h2>
          </div>
        </div>
        <p>
          Contact me for any collaboration ideas that you have. Or simply just
          want to have a discussion about coding.
        </p>
        <button>Contact Me</button>
      </div>
      <div className="image">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
