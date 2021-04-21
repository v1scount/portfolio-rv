import React from 'react';
import Head from '../../components/head';
import * as meStyles from './me.module.scss';

const MePage = () => {
    return(
        <div className={meStyles.me}>
            <h1 className={meStyles.headers}>SOBRE MI</h1>
            <div className={meStyles.personalDescription} >
            <a href="https://ibb.co/vVGv1Kg"><img src="https://i.ibb.co/vVGv1Kg/hiEmoji.jpg" alt="hiEmoji" className={meStyles.profilePic} /></a>
            <p>
                Soy un desarrollador Fullstack de Córdoba, Argentina con el objetivo constante de aprender nuevas tecnologías para ampliar mi abanico de conocimientos. Me concentro en resolver los problemas que se me presentan de manera simple y directa, tratando de ser lo más eficaz posible. Aunque puedo desempeñarme en el front-end mi principal interés es el back-end.
            </p>
            </div>
            <div className={meStyles.education}>
            <h2 className={meStyles.headers} >
                EDUCACION
            </h2>
            <p>
            Soy un graduado del HENRY Bootcamp, donde aprendí a través de +700hs de clases en vivo y prácticos constantes los principales stacks del desarrollo web. Luego de la parte teorica-practica en HENRY trabajamos en dos proyectos labs para afianzar y poner en práctica de manera real los conocimientos aprendidos. Allí desarrolle, junto a dos trabajos de equipo distintos y aplicando las metodologías SCRUM, un ecommerce como primer proyecto y luego un sitio de gestión estudiantil ficticio para HENRY mismo.
            </p>
            </div>
        </div>
    )
}

export default MePage;