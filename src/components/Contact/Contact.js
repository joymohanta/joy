import React, { useEffect } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import contact from "../../images/contact-us.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_07reon6",
        "template_rlucfib",
        event.target,
        "75MCoQq0tysJ0zTjb"
      )
      .then((res) => {
        console.log(res);
        alert("Congrats!! You have successfully send message");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="main-div">
      <section id="contact-part" className="full-section">
        <p data-aos="fade-up" className="top-title">
          CONTACT NOW
        </p>
        <h1 data-aos="fade-up" data-aos-duration="2500" className="title-text">
          Have Question? Write a <br /> Message
        </h1>
        <div className="contact-section">
          <div className="signup-form">
            <form
              data-aos="fade-up"
              data-aos-duration="3000"
              onSubmit={sendEmail}
              className="form-control"
            >
              <label>Full Name</label>
              <br />
              <input className="input-field" type="text" name="name" required />
              <br /> <br />
              <label>Your Email</label>
              <br />
              <input
                className="input-field"
                name="email"
                type="text"
                required
              />
              <br /> <br />
              <label id="text-label">Message</label>
              <textarea
                rows="5"
                className="input-field"
                type="text"
                name="message"
                required
              />
              <br />
              <input className="login-btn" type="submit" value="Send Message" />
            </form>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="3000"
            className="picture"
          >
            <img src={contact} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
