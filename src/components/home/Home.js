import React from "react";
import "./home.scss";
import HomeContent from "../home-content/HomeContent.js";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1 className="home-title">
          OBSERVATORIO DE DATOS CON PERSPECTIVA DE GÉNERO
        </h1>
      </div>
      <HomeContent />
    </div>
  );
};

export default Home;
