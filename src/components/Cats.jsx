import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import CatCard from "./CatCard";
import Footer from "./Footer";
import { GiAbstract038 } from "react-icons/gi";
import "./Cats.css";
const apiKey = "LmBLnyCMzGz3cMfy391Zyg==Rzqx5XZSSFHOuozQ";

const Cats = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCats = () => {
    return axios
      .get("https://api.api-ninjas.com/v1/cats?playfulness=5", {
        headers: { "X-Api-Key": apiKey }
      })
      .then(response => {
        console.log(response);
        setCats(response.data);
        // setTimeout(() => {}, 3000);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
    getCats();
  }, []);
  return (
    <div className="CatsPage__Wrapper">
      {loading && (
        <div className="loader-container">
          <div className="spinner">
            <GiAbstract038 style={{ height: "20px", width: "20px" }} />
          </div>
        </div>
      )}
      {!loading && (
        <>
          <Nav />
          <div className="CatsCard__Wrapper">
            {cats &&
              cats.map((value, index) => {
                return index < 8 ? <CatCard cat={value} key={index} /> : null;
              })}
          </div>
          <Footer />{" "}
        </>
      )}
    </div>
  );
};

export default Cats;
