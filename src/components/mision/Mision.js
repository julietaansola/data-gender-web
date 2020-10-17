import React from 'react';
import "./mision.scss";
import trama from "../../assets/trama.png";

const Mision = () => {
    return (
        <>
        <div className="mision-wrapper">
            <span className="mision-title">Nuestro proyecto</span>
            <img className="trama" alt="trama" src={trama} />
            <p>
            Es por eso que a principios de este año fundamos el primer Observatorio de Datos con Perspectiva de Género de la región. Esta iniciativa responde a la urgencia de poder visibilizar e incidir sobre la falta de recolección de datos que puedan ayudar a resolver problemáticas de género, el difícil acceso a los datos que no son abiertos, la carencia de perspectiva de género en aquellos equipos que trabajan sobre la producción y análisis de los datos, la falta de formación de mujeres y personas LGBTIQ+ en ciencia de datos, la falta de diálogo entre las ciencias sociales y las exactas en este campo.

            Somos un equipo interdisciplinario de activistas de género donde lo científico, lo técnico, lo social y las humanidades se potencian para poder generar un proceso integral de producción de datos con perspectiva de género.

            Estamos trabajando activamente para poder generar y hacer disponibles datos con perspectiva de género de calidad. Esto quiere decir: datos que sean confiables, válidos y más representativos, que tengan como ideal y objetivo disminuir los sesgos de género, con una amplia cobertura nacional y regional y que también puedan ser comparables entre países en términos de conceptos, definiciones y medidas. Los datos de calidad deben tener también cierta complejidad (lo que significa que los datos de diferentes dominios en la vida de las mujeres y personas LGBTIQ+ pueden tener referencias y tabulaciones cruzadas) y granularidad (donde los datos se pueden desglosar en unidades más pequeñas por lugar de nacimiento, edad y ubicación geográfica, así como el sexo y el género autopercibido).

            A su vez a nivel país es necesario poder generar estándares de datos que permitan el diálogo de los mismos dentro de las diferentes provincias, municipios y ciudades de Argentina y la región para poder tener una mirada real de nuestro territorio, agilizar procesos administrativos y en última instancia comprender e incidir mejor para mejorar la calidad de vida de los y las habitantes del país.
            El Observatorio tiene como objetivos sistematizar y compartir los procesos integrales de producción de datos con perspectiva de género, disponibilizar datos y articular entre diversos actores de la sociedad para poder realizar análisis y comunicaciones responsables, que puedan colaborar a la resolución de diversas poblemáticas que afectan a mujeres y personas LGBTIQ+.

            </p>
        </div>
        </>
    )
}

export default Mision;
