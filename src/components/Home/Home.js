import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-page">
      <div className="home-pic">
        <div>
          <h1>Hello, Welcome!!</h1>
          <h1 className="name-title">Joy Mohanta</h1>
          <p>
            I am a full stack web developer. I have couple of projects done by
            me. <br /> My projects are made of MERN style. If you are interested
            please leave <br /> a message to me below.
          </p>
        </div>
        <div className="developer-picture">
          <img src="https://i.ibb.co/4ffZy8d/stack.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
