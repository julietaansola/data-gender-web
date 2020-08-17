import React from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <HashRouter>
      <div className="header">
        <div className="information">
          <NavLink className="link home" exact to="/">
            {" "}
            Home
          </NavLink>
          <NavLink className="link library" to="/info">
            {" "}
            Who we are{" "}
          </NavLink>
          <NavLink className="link contact" to="/contact">
            {" "}
            Contact
          </NavLink>
        </div>
      </div>
      <div className="content-wrapper">
        <Route exact path="/" component={Home} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/quienes-somos" component={WhoWeAre} />
        <Route exact path="/mision" component={Mision} />

      </div>
      <Footer/>
    </HashRouter>
  );
};

export default App;
