import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsPerson } from "react-icons/bs";

import Nav from "./Nav";
import "./Header.css";
const apiKey = "LmBLnyCMzGz3cMfy391Zyg==Rzqx5XZSSFHOuozQ";
const Header = () => {
  const [quote, setQuote] = useState([]);
  const getQuote = () => {
    return axios
      .get("https://api.api-ninjas.com/v1/quotes?category=happiness", {
        headers: { "X-Api-Key": apiKey }
      })
      .then(response => {
        console.log(response);
        setQuote(response.data[0]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className={"App__Wrapper"}>
      <Nav />
      <section className="Header__Wrapper">
        <div className="heroInner">
          <span style={{ border: "none" }}>
            <div>
              <h2 className={"heroHeading"}>
                {quote.quote}
                <div>
                  <span className="Icon" style={{ border: "none" }}>
                    <BsPerson />
                  </span>
                  <h6>{quote.author}</h6>
                </div>
              </h2>
            </div>
            <a
              href="#"
              className="btn btn-light btn-margin-top"
              onClick={getQuote}
            >
              new quote?
            </a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Header;
