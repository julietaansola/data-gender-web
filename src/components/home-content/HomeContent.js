import React from "react";
import "./home-content.scss";
import logo from "../../assets/button.png"
import orga1 from "../../assets/orgas/lasDeSist.png"

const HomeContent = () => {
  return (
    <div className="home-content-container">
      <div className="home-content">
       <div className='description-wrapper'> 
        <img
          className="home-content-image"
          src={logo}          alt="logo"
        />
        <p className="home-content-description">
          Que la recolección y el análisis de datos sea también
          una puerta a una sociedad más justa.                  
        </p>
      </div>
      
      <div className="aliadxs">
        <p className="orgas-title">ORGANIZACIONES ALIADAS</p>
        <div className="orgas-wrapper">
          <img className="orga 1" src={orga1} alt=""/>
          <img className="orga 2" src={orga1} alt=""/>
          <img className="orga 3" src={orga1} alt=""/>
        </div>
      </div>
       </div>
     
    </div>
  );
};

export default HomeContent;
