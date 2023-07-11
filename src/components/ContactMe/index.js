import React, { useState } from "react";
import "./contactMe.css";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(event.target.value);
    setEmailError(false);
    setEmailInvalid(!validateEmail(enteredEmail));
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError(false);
  };

  const handleBlur = (field) => {
    if (field === "name" && name === "") {
      setNameError(true);
    } else if (field === "email" && email === "") {
      setEmailError(true);
      setEmailInvalid(!validateEmail(email));
    } else if (field === "message" && message === "") {
      setMessageError(true);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <p>Leave your name, email and a small message to me below</p>
      <div class="mb-3">
        <label for="formControlInput1" class="form-label">
          Name
        </label>
        <input
          class={`form-control ${nameError ? "is-invalid" : ""}`}
          value={name}
          onChange={handleNameChange}
          onBlur={() => handleBlur("name")}
        ></input>
        {nameError && <div className="invalid-feedback">Name is required</div>}
        <label for="formControlInput2" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class={`form-control ${
            emailError || emailInvalid ? "is-invalid" : ""
          }`}
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => handleBlur("email")}
        ></input>
        {emailError && (
          <div className="invalid-feedback">Email is required</div>
        )}
        {emailInvalid && (
          <div className="invalid-feedback">Invalid email address</div>
        )}
        <label for="formControlTextArea1" class="form-label">
          Message
        </label>
        <textarea
          class={`form-control ${messageError ? "is-invalid" : ""}`}
          rows="4"
          value={message}
          onChange={handleMessageChange}
          onBlur={() => handleBlur("message")}
        ></textarea>
        {messageError && (
          <div className="invalid-feedback">Message is required</div>
        )}
        <button type="button" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactMe;
