import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();

    emailjs
      .send(
        "service_74ha8vn",
        "template_3okzsq9",
        { name: name, email: email, message: message },
        "S0J-Grt6R3ANcUi96"
      )
      .then(
        (result) => {
          alert("Email successfully sent!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert(error);
        }
      );
  }

  return (
    <section className="section" id="contact-section">
      <h1 className="text-secondary">&lt;Contact Me/&gt;</h1>
      <form
        onSubmit={sendEmail}
        className="text-white contact-form d-flex flex-column align-items-center w-100 mt-5"
      >
        <div className="form-group">
          <label className="mb-2" htmlFor="user_name">
            Your Name:{" "}
          </label>
          <input
            className="form-control"
            type="text"
            name="user_name"
            id="user_name"
            placeholder="First Last"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label className="mb-2" htmlFor="email">
            Your Email:{" "}
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label className="mb-2" htmlFor="messsage">
            Message:{" "}
          </label>
          <textarea
            className="form-control"
            name="messsage"
            id="messsage"
            cols={40}
            rows={10}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <button
          className="btn btn-lg btn-secondary w-10 align-self-center mt-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
