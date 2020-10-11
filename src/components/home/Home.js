import React from "react";
import "./home.scss";
import HomeContent from "../home-content/HomeContent.js";
import observatorioTitle from "../../assets/observatorioTitle.png";
import trama from "../../assets/trama.png";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <img className="trama" alt="trama" src={trama}/>
        <img className="home-title" alt="title" src={observatorioTitle}/>
      </div>
      <HomeContent />
    </div>
  );
};

export default Home;
