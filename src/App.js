import React from "react";
import "./App.scss";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/home/Home";
import WhoWeAre from "./components/who-we-are/WhoWeAre";
import Mision from "./components/mision/Mision";
import git from "./assets/git.png";
import tw from "./assets/tw.png";
import ig from "./assets/ig.png";



const App = () => {
  return (
    <HashRouter>
      <header className="header">
        <nav className="navbar">
          <NavLink className="link who-we-are" exact to="/">
          <button className="logo"></button>
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
      <content className="content-wrapper">
        <Route exact path="/" component={Home} />
        <Route exact path="/quienes-somos" component={WhoWeAre} />
        <Route exact path="/mision" component={Mision} />
      </content>

      
        <div className="footer">
         <a name="link-footer"></a>
         <a href="https://twitter.com/datagenero"><img className="tw" alt="" src={tw} /></a>
         <a href=""><img className="git" alt="" src={git} /></a>
         <a href="https://www.instagram.com/datagenero/"><img className="ig" alt="" src={ig} /></a>
        </div>
        
        <div className="design">Diseñado y desarrollado por <a className="footer-link" href="https://github.com/maisli4"> Maia Slipczuk </a> y <a className="footer-link" href="https://github.com/camila-ng"> Camila González   </a></div>
     
    </HashRouter>
  );
};

export default App;
