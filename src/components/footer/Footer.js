import React from "react";
import "./footer.scss";
import git from "../../assets/git.png";
import tw from "../../assets/tw.png";
import ig from "../../assets/ig.png";

const Footer = () => {
    return (
        
        
        <div className="footer">
        <a name="link-footer"></a>
        <a href="https://twitter.com/datagenero"><img className="tw" alt="" src={tw} /></a>
        <a href=""><img className="git" alt="" src={git} /></a>
        <a href="https://www.instagram.com/datagenero/"><img className="ig" alt="" src={ig} /></a>
        <div className="design">Diseñado y desarrollado por <a className="footer-link" href="https://github.com/maisli4"> Maia Slipczuk </a> y <a className="footer-link" href="https://github.com/camila-ng"> Camila González   </a></div>
       </div>
       

    )
}

export default Footer;
