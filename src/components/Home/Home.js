import React from "react";
import "./Home.css";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <div className="main-page">
      <div className="home-pic">
        <div className="font-style">
          <h2>Welcome!! My Name is</h2>
          {/* <h1 className="name-title">
            <TypeWriterEffect
              startDelay={2000}
              cursorColor="#fff"
              multiText={["Joy Mohanta", "Joy Mohanta"]}
              multiTextDelay={2000}
              typeSpeed={110}
              multiTextLoop
            />
          </h1> */}
          <p>
            I am a full stack web developer. I have couple of projects done by
            me. <br /> My projects are made of MERN style. If you are interested
            please leave <br /> a message to me below.
          </p>
          <br /> <br />
          <a className="button" href="#">
            Hire Me
            <ArrowNarrowRightIcon className="icon"></ArrowNarrowRightIcon>
          </a>
        </div>
        <div className="developer-picture">
          <img
            src="https://res.digital/wp-content/uploads/2019/12/word-image-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
