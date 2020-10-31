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
                
                <span className="mision-title">Visión</span>
                <div className="two-columns">
                <p className="p-1">
                Nuestra meta es generar un proceso integral de producción de datos con perspectiva de género que pueda ser replicado en la región.
                </p>
                <p className="p-2"> 
                Detectamos la necesidad de poder generar, compartir y analizar datos con perspectiva de género de calidad. Necesitamos datos que: 
                <ul>
                <li>Sean confiables, válidos y más representativos</li>
                <li>Tengan como ideal y objetivo disminuir los sesgos de género</li>
                <li>Posean una amplia cobertura local, nacional y regional</li>
                <li>Puedan ser comparables entre países en términos de conceptos, definiciones y medidas. </li>
                </ul>
                </p>
                </div>

                <span className="mision-title">Objetivos</span>
                
                <div className="two-columns">
                <p className="p-1">
                Sistematizar y compartir los procesos integrales de producción de datos con perspectiva de género
                Poner a disposición sets de datos con perspectiva de género.
                </p>
                <p className="p-2"> 
                Articular entre diversos actores de la sociedad para poder realizar análisis y comunicaciones responsables e inclusivas.
                Colaborar con la resolución de diversas problemáticas que afectan a mujeres y personas LGBTIQ+</p>
                </div>

                <span className="mision-title">Transparencia</span>
                
                <p className="p-1">
                El Observatorio de Datos con perspectiva de género es una organización
                de la sociedad civil independiente y apartidaria que se financia con aportes de sus integrantes. </p>
                
            </div>
        </div>
        </>
    )
}

export default Mision;
