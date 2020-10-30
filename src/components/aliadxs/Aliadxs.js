import React from 'react'
import './aliadxs.scss'
import orga1 from "../../assets/orgas/lasDeSist.png"
import orga2 from "../../assets/orgas/metcba.png"
import orga3 from "../../assets/orgas/rladies.png"
import orga4 from "../../assets/orgas/wbio.png"
import orga5 from "../../assets/orgas/wim.png"
const Aliadxs = () => {
    return (
        <div>
          <div className="aliadxs-container">
          <div className="image-title-container">
          <div
            className="aliadxs-img"
          ></div>
          </div>
          <div className="orgas-container">
          <p className="orgas-title">ORGANIZACIONES ALIADAS</p>

          <div className="orgas-wrapper">

            <a href="https://lasdesistemas.org/"><img className="orga 1" src={orga1} alt="" /></a>
            <a href="https://mujeresentecnologia.org/"><img className="orga 2" src={orga2} alt="" /></a>
            <a href="https://twitter.com/rladies_rciacte"><img className="orga 3" src={orga3} alt="" /></a>
            <a href="https://twitter.com/bioinfola"><img className="orga 4" src={orga4} alt="" /></a>
            <a href="http://wimlds.org/"><img className="orga 5" src={orga5} alt="" /></a>
            
          </div>
          </div>
          </div>
        </div>
    )
}

export default Aliadxs
