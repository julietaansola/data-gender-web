import React from "react";
import "./App.scss";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./components/home/Home";
import WhoWeAre from "./components/who-we-are/WhoWeAre";
import Mision from "./components/mision/Mision";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";




const App = () => {
  return (
    <HashRouter>

      <Header />
      <content className="content-wrapper">
        <Route exact path="/" component={Home} />
        <Route exact path="/quienes-somos" component={WhoWeAre} />
        <Route exact path="/mision" component={Mision} />
      </content>  
      <Footer />   
     
    </HashRouter>
  );
};

export default App;
