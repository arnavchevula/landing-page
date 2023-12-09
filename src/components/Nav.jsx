import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsNewspaper, BsTelephone, BsLayoutThreeColumns } from "react-icons/bs";
import { GiHollowCat } from "react-icons/gi";

import "./Nav.css";

const Nav = ({ color, fontColor }) => {
  console.log(fontColor);
  return (
    <div
      className={"Nav__Wrapper"}
      style={{ background: color, color: fontColor }}
    >
      <div className="Logo__Wrapper">
        <div className="Logo">navviec</div>
      </div>
      <ul className="Nav__List">
        <li>
          <Link to="/">
            {" "}
            <AiOutlineHome />
            home
          </Link>
        </li>
        <li>
          <Link to="/cats">
            <GiHollowCat />
            cats
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            {" "}
            <BsTelephone />
            contact
          </Link>
        </li>
        <li>
          <Link to="/about">
            {" "}
            <BsLayoutThreeColumns />
            about
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
