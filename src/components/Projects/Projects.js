import React, { useEffect } from "react";
import "./Projects.css";
import pic1 from "../../images/pic1.jpg";
import pic6 from "../../images/pic6.jpg";
import pic9 from "../../images/pic9.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects-part" className="main-project">
      <p
        data-aos="zoom-in-down"
        data-aos-duration="2000"
        className="project-title"
      >
        MY PROJECTS
      </p>
      <h2 data-aos="zoom-in-up" data-aos-duration="2500" className="work-title">
        My Letest Creative Work
      </h2>
      <div className="div-flex">
        <div data-aos="fade-up" className="parent-project">
          <div className="pic-size">
            <img src={pic9} alt="" />
          </div>
          <div className="inner-text">
            <a href="https://new-drill-world.web.app/">Drill's World Live</a>
            <br />
            <br />
            <button>Detail Below</button>
          </div>

          <div className="project-per-detail">
            <h2>Project Detail</h2>
            <p>
              {" "}
              Designed an attractive UI by ReactJS. Implemented stripe payment
              gateway method for selected service. Integrated a dashboard where
              users can see orders & put a feedback. Clarified super admin
              dashboard who can control services & make another admin.
            </p>
            <a
              className="code-link"
              href="https://github.com/joymohanta/manufacture-website-client-side"
            >
              ClientCode
            </a>{" "}
            <a
              className="code-link"
              href="https://github.com/joymohanta/manufacture-website-server-side"
            >
              ServerCode
            </a>
            <p>
              Feature:{" "}
              <h4>
                ReactJS, NodeJS, MongoDB, React Bootstrap, JWT, Strip, React
                Router, React Firebase Hook, Firebase, React Query, React Form
                etc
              </h4>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="parent-project"
        >
          <div className="pic-size">
            <img src={pic1} alt="" />
          </div>
          <div className="inner-text">
            <a href="https://laptop-dealer-stock.web.app/">
              Laptop Dealer Live
            </a>
            <br /> <br />
            <button>Detail Below</button>
          </div>
          <div className="project-per-detail">
            <h2>Project Detail</h2>
            <p>
              {" "}
              Implemented a product review & quantity measurement button for
              delivery. Manipulated a delivery schedule page where all products
              can be managed. Integrated a form where products can be added.{" "}
            </p>
            <a
              className="code-link"
              href="https://github.com/joymohanta/warehouse-management-client-side"
            >
              ClientCode
            </a>{" "}
            <a
              className="code-link"
              href="https://github.com/joymohanta/warehouse-management-server-side"
            >
              ServerCode
            </a>
            <p>
              Feature:{" "}
              <h4>
                ReactJS, NodeJS, MongoDB, React Bootstrap, JWT, React Router,
                React Firebase Hook, React Form, Firebase etc
              </h4>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="parent-project"
        >
          <div className="pic-size">
            <img src={pic6} alt="" />
          </div>
          <div className="inner-text">
            <a href="https://super-cat-fadc66.netlify.app/dashboard">
              Product Review Live
            </a>
            <br /> <br />
            <button>Detail Below</button>
          </div>
          <div className="project-per-detail">
            <h2>Project Detail</h2>
            <p>
              {" "}
              Eye-catching UI design with limited feedback from users. Graph
              chart of product last couple of years demand and revenue. User
              review page where all user's reviews counted with ratings.{" "}
            </p>
            <a
              className="code-link"
              href="https://github.com/joymohanta/product-analysis-website"
            >
              ClientCode
            </a>
            <p>
              Feature:{" "}
              <h4>HTML, CSS, JS, Bootstrap, Figma, Rechart, ReactJS</h4>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
