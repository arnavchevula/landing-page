import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbBrandPython } from "react-icons/tb";
import { FaJava, FaCss3Alt } from "react-icons/fa6";
import { SiAmazonaws } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

const Skills = [
  { icon: <FaReact />, label: "React", length: "90%" },
  { icon: <FaNodeJs />, label: "Node.js", length: "80%" },
  { icon: <RiJavascriptLine />, label: "React", length: "90%" },
  { icon: <FaHtml5 />, label: "HTML5", length: "80%" },
  { icon: <AiOutlineConsoleSql />, label: "SQL", length: "60%" },
  { icon: <TbBrandPython />, label: "Python", length: "70%" },
  { icon: <FaCss3Alt />, label: "CSS", length: "90%" },
  { icon: <FaJava />, label: "Java", length: "60%" },
  { icon: <SiAmazonaws />, label: "AWS", length: "50%" },
  { icon: <TbBrandAzure />, label: "Azure", length: "70%" }
];

const SkillsCard = () => {
  return (
    <div className="Skills__Container">
      <p className="Card__Title"> SKILLS</p>

      {Skills.map(element => {
        return (
          <p className="Card__Element">
            <span className="Label__Icon">
              {element.icon} {element.label}
            </span>
            <div className="Progress__Bar">
              <div
                className="ProgressBar__Inner"
                style={{ width: element.length }}
              ></div>
            </div>
          </p>
        );
      })}
      {/* <p className="Card__Element">
        <span className="Label__Icon">
          {" "}
          <FaReact /> React
        </span>
        <div className="Progress__Bar">
          <div className="ProgressBar__Inner"></div>
        </div>
      </p> */}
    </div>
  );
};

export default SkillsCard;
