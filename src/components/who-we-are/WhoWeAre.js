import React from "react";
import info from "../../data.js";
import './who-we-are.scss'

const WhoWeAre = () => {
  return (
    <div className="who-we-are-content">
      <h1 className="who-we-are-title">QUIENES SOMOS</h1>
      <section className="member-container">
        {info.map((member) => (
          <div key={member.name} className="member">
            <img alt={`miembro ${member.name}`} src={member.image} className="member-image"></img>
            <div className="member-name">{member.name}</div>
            <div className="member-description">{member.description}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WhoWeAre;
