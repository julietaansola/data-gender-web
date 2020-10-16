import React from "react";
import "./home.scss";
import HomeContent from "../home-content/HomeContent.js";
import HomeSlider from "../slider/HomeSlider"

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1 className="home-title">
          OBSERVATORIO de DATOS con PERSPECTIVA de GÉNERO
        </h1>
      </div>
    <div className="home-content">
    <HomeContent />
    <HomeSlider/>
    </div>
      
   

    </div>
  );
};

export default Home;
