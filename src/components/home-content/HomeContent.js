import React from "react";
import "./home-content.scss";
import logo from "../../assets/fondo-home.png"


const HomeContent = () => {
  return (
    <div className="home-content-container">
      <div className="home-content">
        <div className='description-wrapper'>
          <img
            className="home-content-image"
            src={logo} alt="logo"
          />

          <div className="left-description-container">
          <h1 className="description-title">SOMOS EL NUEVO OBSERVATORIO</h1>
          <p className="home-content-description">
            Tenemos como objetivo sistematizar y compartir los procesos integrales de producción de datos con perspectiva de género, disponibilizar datos y articular entre diversos actores de la sociedad para poder realizar análisis y comunicaciones responsables, que puedan colaborar a la resolución de diversas poblemáticas que afectan a mujeres y personas LGBTIQ+.
        </p>
        </div>
        
        </div>
      </div>

    </div>
  );
};

export default HomeContent;
