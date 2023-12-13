import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import logo from "../profile.jpg";
import risklens from "../risklens.webp";
import liscio from "../liscio.png";
import brunswick from "../brunswick.jpeg";
import { FiMail } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSchool } from "react-icons/md";
import { FaI } from "react-icons/fa6";

import SkillsCard from "./SkillsCard";

import uiuc from "../uiuc.png";

import "./Resume.css";

const Resume = () => {
  return (
    <div className="Resume__Container">
      <div className="LeftTab__Container">
        <div className="Avatar__Container">
          <img src={logo} className="Avatar" />
        </div>
        <div className="Name__Container">
          <p style={{ fontSize: "xx-large" }}>Arnav Chevula</p>
          <p style={{ letterSpacing: "2px", color: "#3dfbff" }}>
            Software Engineer
          </p>
        </div>
        <div className="ContactInfo__Container">
          <div className="ContactInfo">
            <p className="Card__Title"> CONTACT INFO</p>
            <p className="Contact__Element">
              {" "}
              <FiMail className="CalendarIcon" />
              arnav.chevula@gmail.com{" "}
            </p>
            <p className="Contact__Element">
              {" "}
              <LuPhone className="CalendarIcon" /> +1(908)-566-6415
            </p>
            <p className="Contact__Element">
              {" "}
              <IoHomeOutline className="CalendarIcon" /> Chicago, IL
            </p>
          </div>
          <div className="Education__Container">
            <p className="Card__Title">EDUCATION</p>
            <p className="Contact__Element">
              {" "}
              <img src={uiuc} className={"UIUC__Logo"} />
              University of Illinois at Urbana Champaign
            </p>
            <p className="Contact__Element">
              <MdOutlineSchool className="Degree__Logo" />
              B.S. Computer Engineering August 2019
            </p>
          </div>
        </div>
        <SkillsCard />
      </div>

      <div className="RightTab__Container">
        <div className="Mission__Container">
          <h2 className="Label__Text">ABOUT ME</h2>
          <div className="Mission__Statement">
            <p>
              Customer-focused engineer passionate about crafting scalable &
              intelligent user experiences while fostering an inclusive &
              collaborative culture.
              {/* </p>
            <p>
              {" "} */}
              The opportunity to work on well designed customer focused web
              applications with social good in mind. Creating a feature rich and
              intelligent user experience from scratch and working cross
              functionally across the company.
            </p>
          </div>
        </div>
        <div className="Experience__Container">
          <h2 className="Label__Text">EXPERIENCE</h2>
          <div className="Card__Containers">
            <div className="Experience">
              <div className="Experience__Left">
                <span className="Company__Text">
                  <img src={risklens} className="RiskLens__Logo" />
                  RiskLens
                </span>
                <span className="Date__Text">
                  <LuCalendarDays className="CalendarIcon" />
                  May 2023 - Jul 2023
                </span>
                {/* <span>
                  <CiLocationOn style={{ fontSize: "x-large" }} />
                  Chicago, IL
                </span> */}
              </div>

              <div className="Experience__Right">
                <span className="Position__Text">
                  {/* <BsBriefcase style={{ marginRight: "5px" }} /> */}
                  Software Engineer II{" "}
                </span>
                {/* <span className="Company__Text">
                  <img src={risklens} className="RiskLens__Logo" />
                  RiskLens
                </span> */}
                <ul className="Experience__List">
                  <li>
                    Developed a modern and intuitive UI using React and
                    TypeScript, enhancing the client's ability to analyze cloud
                    vulnerabilities and cyber risk more effectively.
                  </li>
                  <li>
                    Collaborated with the team to fix backend bugs, ensuring
                    data contracts were consistently enforced to create a more
                    robust and reliable product.
                  </li>
                  <li>
                    Documented C# API endpoints using Swagger, enhancing
                    external client usability and reducing integration time to
                    foster stronger partnerships and adoption.
                  </li>
                </ul>
              </div>
            </div>
            <div className="Experience">
              <div className="Experience__Left">
                <span className="Company__Text">
                  <img src={liscio} className="Company__Logo" />
                  Liscio
                </span>
                <span className="Date__Text">
                  <LuCalendarDays className="CalendarIcon" />
                  Mar 2022 - Apr 2023
                </span>{" "}
                {/* <span>
                  <CiLocationOn style={{ fontSize: "x-large" }} />
                  Chicago, IL
                </span> */}
              </div>

              <div className="Experience__Right">
                <span className="Position__Text">
                  {/* <BsBriefcase style={{ marginRight: "5px" }} /> */}
                  Software Engineer II{" "}
                </span>
                {/* <span className="Company__Text">
                  <img src={liscio} className="Company__Logo" />
                  Liscio
                </span> */}
                <ul className="Experience__List">
                  <li>
                    Successfully led the refactor of legacy React codebase to
                    React 17 to ensure compliance with modern standards and
                    improve application performance.
                  </li>
                  <li>
                    Collaborated with cross-functional and offshore teams to
                    design new features and enhance user experience to decrease
                    user churn.
                  </li>
                  <li>
                    Applied Test-Driven Development (TDD) principles, writing
                    unit tests with Jest to ensure code quality and reliability
                    so developers can confidently ship error free code.
                  </li>
                </ul>
              </div>
            </div>

            <div className="Experience">
              <div className="Experience__Left">
                <span className="Company__Text">
                  <img src={brunswick} className="Company__Logo" />
                  Brunswick Corporation
                </span>
                <span className="Date__Text">
                  <LuCalendarDays className="CalendarIcon" />
                  Sep 2019 - Mar 2022
                </span>{" "}
                {/* <span>
                  <CiLocationOn style={{ fontSize: "x-large" }} />
                  Chicago, IL
                </span> */}
              </div>

              <div className="Experience__Right">
                <span className="Position__Text">
                  {/* <BsBriefcase style={{ marginRight: "5px" }} /> */}
                  Software Engineer{" "}
                </span>
                {/* <span className="Company__Text">
                  <img src={brunswick} className="Company__Logo" />
                  Brunswick Corporation
                </span> */}
                <ul className="Experience__List">
                  <li>
                    Created REST API microservice endpoints using NodeJS/Express
                    to securely publish data to an external company's server for
                    seamless communication.
                  </li>
                  <li>
                    Engineered Continuous Integration and Continuous Deployment
                    (CI/CD) pipelines with Microsoft AppCenter and Travis CI for
                    efficient QA iteration.
                  </li>
                  <li>
                    Deployed production apps to Google Play and iOS App Stores,
                    ensuring smooth user experiences.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
