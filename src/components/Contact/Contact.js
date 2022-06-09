import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import contact from "../../images/contact.png";

const Contact = () => {
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
    <div>
      <section>
        <h6 className="top-title">CONTACT NOW</h6>
        <h1 className="title-text">
          Have Question? Write a <br /> Message
        </h1>
        <div className="contact-section">
          <div className="signup-form">
            <form onSubmit={sendEmail} className="form-control">
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
          <div className="picture">
            <img src={contact} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
