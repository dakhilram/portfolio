import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./../styles/contact.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6wa3n0m",
      "template_rdj5nb4",
      form.current,
      "q65zV2qPYPEnuVALw"
    ).then(
      () => {
        setIsSent(true);
        form.current.reset();
      },
      (error) => {
        alert("Something went wrong! Please try again.");
        console.error(error);
      }
    );
  };

  return (
    <div className="section contact-section">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
        {isSent && <p className="success-msg">Thank you! Your message was sent.</p>}
      </form>
    </div>
  );
};

export default Contact;
