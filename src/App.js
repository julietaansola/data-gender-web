import React from "react";
import "./App.scss";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/home/Home";
import WhoWeAre from "./components/who-we-are/WhoWeAre";
import Mision from "./components/mision/Mision";
const App = () => {
  return (
    <HashRouter>
      <header className="header">
        <nav className="navbar">
          <button className="logo">G</button>
          <div className="links-wrapper">
          <NavLink className="link contact" to="/">
            Home
          </NavLink>
          <NavLink className="link who-we-are" exact to="/mision">
            Mision
          </NavLink>
          <NavLink className="link mision" to="/quienes-somos">
            Quienes somos
          </NavLink>
          <NavLink className="link contact" to="/">
            Contacto
          </NavLink>
          </div>
        </nav>
      </header>
      <content className="content-wrapper">
        <Route exact path="/" component={Home} />
        <Route exact path="/quienes-somos" component={WhoWeAre} />
        <Route exact path="/mision" component={Mision} />
      </content>

      <footer className="footer">
        <div className="design">Diseñado y desarrollado por <a className="footer-link" href="https://github.com/maisli4"> Maia Slipczuk </a> y <a className="footer-link" href="https://github.com/camila-ng"> Camila González </a></div>
      </footer>
    </HashRouter>
  );
};

export default App;
