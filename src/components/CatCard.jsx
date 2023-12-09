import React, { useEffect, useState } from "react";
import { GiHollowCat } from "react-icons/gi";

import { BsFlag } from "react-icons/bs";
import "./CatCard.css";

const CatCard = (cat, key) => {
  console.log(cat.cat);
  return (
    <div className="CatCard">
      <div className="Card__Headline">
        <span>{cat.cat.name}</span>
      </div>
      <div className="Card__Image">
        <img src={cat.cat.image_link} className="Cat__Picture" />
      </div>
      <div className="Info__Row">
        <span>
          <BsFlag
            style={{ marginRight: "10px", transform: "translate(0px, 2px)" }}
          />
          <label>{"Origin: "}</label>
          {cat.cat.origin}
        </span>
      </div>
      <div className="Info__Row">
        <span>
          <GiHollowCat
            style={{ marginRight: "10px", transform: "translate(0px, 2px)" }}
          />
          <label>{"Playfulness: "}</label>
          {cat.cat.playfulness}
        </span>
      </div>

      <div className="Button__Container">
        <button className="Card__Button">Click Here</button>
      </div>
    </div>
  );
};

export default CatCard;
