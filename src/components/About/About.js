import React, { useEffect } from "react";
import "./About.css";
import photo from "../../images/formal-pic.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="about-part" className="bg-pic">
      <div className="main-about">
        <div data-aos="fade-up" className="img-border">
          <div className="personal-img">
            <img src={photo} alt="" />
          </div>
        </div>
        <div data-aos="fade-down" data-aos-duration="1500">
          <p
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            className="about-title"
          >
            ABOUT ME
          </p>
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="2500"
            className="choose-title"
          >
            Why choose me
          </h2>
          <p>
            I have 2+ years of experience in this field. React and MERN stack
            developer <br /> is my main working area. I have completed 6+
            projects using MERN. <br /> I also have taken a web development
            course from programming hero. <br /> If you are interested to hire
            me and want to make a challenging website <br /> using React or
            MERN, leave me a message below. I am ready for your appointment.{" "}
            <br /> Thanks.
          </p>
          <br />
          <h1 className="choose-title"> My Development Skills </h1>
          <h4>
            {" "}
            HTML, CSS, Javascript, ES6, ReactJS, NodeJS, ExpressJS, Bootstrap,
            Tailwind, <br /> MongoDB, JWT, Firebase, API, SPA, Stripe, Figma,
            HTML to PSD,{" "}
          </h4>
          <br />
          <a className="started-btn" href="#contact-part">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
