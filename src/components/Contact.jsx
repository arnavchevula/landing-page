import React, { useState, useReducer } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import contactFormReducer from "./reducers/contactFormReducer";
import "./Contact.css";

const initialFormState = {
  name: "",
  email: "",
  message: ""
};

const Contact = () => {
  const [formState, dispatch] = useReducer(
    contactFormReducer,
    initialFormState
  );
  console.log(formState);
  const handleTextChange = e => {
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value
    });
  };
  return (
    <div className="ContactPage__Wrapper">
      <Nav />
      <section className="Contact__Form">
        <form>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={e => handleTextChange(e)}
            />
          </label>
          <label>
            Email:{" "}
            <input
              type="text"
              name="email"
              value={formState.email}
              onChange={e => handleTextChange(e)}
            />
          </label>
          <label>
            Message:{" "}
            <input
              type="text"
              name="message"
              value={formState.message}
              onChange={e => handleTextChange(e)}
            />
          </label>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
