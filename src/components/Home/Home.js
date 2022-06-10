import React, { useEffect } from "react";
import "./Home.css";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import TypeWriterEffect from "react-typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Blogs from "../Blogs";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="main-page">
      <div className="home-pic">
        <div className="font-style">
          <h2 data-aos="fade-up">Welcome!! My Name is</h2>
          <h1
            data-aos="fade-in"
            data-aos-duration="1500"
            className="name-title"
          >
            <TypeWriterEffect
              startDelay={2000}
              cursorColor="#fff"
              multiText={["Joy Mohanta", "Joy Mohanta"]}
              multiTextDelay={2000}
              typeSpeed={110}
              multiTextLoop
            />
          </h1>
          <p data-aos="fade-up" data-aos-duration="2000">
            I am a full stack web developer. I have couple of projects done by
            me. <br /> My projects are made of MERN style. If you are interested
            please leave <br /> a message to me below.
          </p>
          <br /> <br />
          <a
            data-aos="fade-up"
            data-aos-duration="2500"
            className="button"
            href="#contact-part"
          >
            Hire Me
            <ArrowNarrowRightIcon className="icon"></ArrowNarrowRightIcon>
          </a>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className="developer-picture"
        >
          <img
            src="https://res.digital/wp-content/uploads/2019/12/word-image-1.png"
            alt=""
          />
        </div>
      </div>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Blogs></Blogs>
      <hr />
    </div>
  );
};

export default Home;
