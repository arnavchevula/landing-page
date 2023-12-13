import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSquareTwitter } from "react-icons/fa6";
import { BiLogoGithub } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

import Nav from "./Nav";
import "./Header.css";
const icons = [
  {
    icon: <FaSquareTwitter style={{ transform: "none" }} />,
    url: "https://twitter.com"
  },
  {
    icon: <FaLinkedin style={{ transform: "none" }} />,
    url: "https://www.linkedin.com/in/arnav-chevula-1a1386b0/"
  },
  {
    icon: <BiLogoGithub style={{ transform: "none" }} />,
    url: "https://github.com/arnavchevula"
  }
];
const apiKey = "LmBLnyCMzGz3cMfy391Zyg==Rzqx5XZSSFHOuozQ";
const Header = () => {
  const navigate = useNavigate();
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

  const handleResume = () => {
    navigate("/about");
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className={"App__Wrapper"}>
      <Nav />
      <section className="Header__Wrapper">
        <div className="Hero__Statement">
          {/* <p>Hello, I am</p> */}
          <h2 className="typewriter" style={{ fontSize: "xxx-large" }}>
            hello I am Arnav Chevula
          </h2>
          <p className={"Hero__Text"}>
            I'm a <span style={{ color: "#ff8f00" }}>Full-Stack Engineer</span>{" "}
            currently looking for my next gig! I have 4+ years in the industry
            developing web applications. Dedicated to transforming ideas into
            elegant, efficient, and scalable solutions. My mission is to create
            impactful well designed technology for the modern world.
          </p>
          <ul className="Button__List">
            {icons.map((icon, index) => {
              return (
                <li className="Icon__Wrapper">
                  <a
                    className="Icon"
                    href={icon.url}
                    key={index}
                    target="_blank"
                  >
                    {icon.icon}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <button className="button-28" onClick={handleResume}>
            Resume
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default Header;
