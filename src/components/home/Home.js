import React from "react";
import "./home.scss";
import HomeContent from "../home-content/HomeContent.js";
import observatorioTitle from "../../assets/observatorioTitle.png";
import trama from "../../assets/trama.png";

const Home = () => {
  return (
    <div>
      <div className="home-container">
       <div className="title-container">
         <div className="side-image"></div>
        <h1 className="home-title"><strong>OBSERVATORIO</strong> DE <strong>DATOS</strong> <br /> CON <strong>PERSPECTIVA DE GÉNERO</strong></h1>
        </div>
        <img className="trama" alt="trama" src={trama} />
      </div>
      <div className="home-content">
        <HomeContent />
      </div>
    </div>
  );
};

export default Home;
