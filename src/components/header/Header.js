import React from 'react';
import "./header.scss";
import { Route, NavLink, HashRouter } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
      <div className="logo-container">
      <button className="logo"></button>
      </div>
        <nav className="navbar">
          <NavLink className="link who-we-are" exact to="/">
          </NavLink>
          <div className="links-wrapper">
          <NavLink className="link proyecto" to="/mision">
            Proyecto
          </NavLink>
          <NavLink className="link who-we-are" exact to="/quienes-somos">
            Quiénes somos
          </NavLink>
          <a className="link blog" href="http://datagenero.medium.com">Blog</a> 

          <NavLink className="link contact" to="/">
            Contacto
          </NavLink>
          </div>
        </nav>
      </header>
    

    )
}

export default Header;