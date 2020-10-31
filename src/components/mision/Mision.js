import React from 'react';
import "./mision.scss";
import trama from "../../assets/trama.png";

const Mision = () => {
    return (
        <>
        <div className="mision-wrapper">
           <div className="trama-wrapper"><img className="trama" alt="trama" src={trama} /></div>
            <div className="mision-content">
                <span className="mision-title">Nuestro proyecto</span>
                
                <div className="two-columns">
                <p className="p-1">
                Somos un equipo interdisciplinario de activistas de género donde lo científico, lo técnico, lo social y las humanidades se potencian para promover la igualdad de datos y visibilizar la ausencia de datos con perspectiva de género. Es por esto que en marzo de 2020 decidimos crear el primer Observatorio de Datos con Perspectiva de Género de la región. 
                </p>
                <p className="p-2"> 
                Queremos trabajar para mejorar el acceso a los datos que no son abiertos, la carencia de perspectiva de género en aquellos equipos que trabajan sobre la producción y análisis de los datos, la falta de formación de mujeres y personas LGBTIQ+ en ciencia de datos y la falta de diálogo entre las ciencias sociales y las exactas en este campo.
                </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Mision;
