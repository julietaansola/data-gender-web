import React from "react";
import "./footer.scss";
import medium from "../../assets/medium.png";
import tw from "../../assets/tw.png";
import ig from "../../assets/ig.png";
import { Route, NavLink, HashRouter } from "react-router-dom";

const Footer = () => {
    return (
                
        <div id="footer" className="footer">
           <div className="main-footer"> 
            <div className="web-map">
                <NavLink className="link home" to="/">
                    Home
                </NavLink>
                <NavLink className="link proyecto" to="/mision">
                    Proyecto
                </NavLink>
                <NavLink className="link who-we-are" exact to="/quienes-somos">
                    Quiénes somos
                </NavLink>
                <a className="link blog" href="http://datagenero.medium.com">Blog</a> 
            </div>
            <div className="logos-wrapper">
                <p className="follow">SEGUINOS</p>
                <a href="https://twitter.com/datagenero"><img className="tw" alt="" src={tw} /></a>
                <a href="http://datagenero.medium.com"><img className="medium" alt="" src={medium} /></a>
                <a href="https://www.instagram.com/datagenero/"><img className="ig" alt="" src={ig} /></a>
            </div>
            <div className="contacto-footer">
                <p className="contacto-p">CONTACTO</p>
                <p className="contacto-mail">datagenero@gmail.com</p>
            </div>
            </div>
            <div className="design">Diseñado y desarrollado por <a className="footer-link" href="https://github.com/maisli4">Maia Slipczuk </a></div>
       </div>
       

    )
}

export default Footer;
