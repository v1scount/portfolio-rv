import React from 'react';
import Head from '../../components/head';
import * as meStyles from './me.module.scss';
import { Slide } from "react-awesome-reveal";


const MePage = () => {
    return(
        <div className={meStyles.me}>
            <Head />
            <Slide 
                triggerOnce
                duration='1500'
            >
                <h1 className={meStyles.headers}>SOBRE MI</h1>
            </Slide>
            <div className={meStyles.education}>
                <p>
                Me gradue en el HENRY Bootcamp donde aprendí a través de +700hs de clases en vivo y prácticas constantes que me formaron como desarrollador web.
                Luego de la parte teórica-práctica del bootcamp realizamos dos proyectos de alcance real para afianzar lo aprendido, generar experiencia y acostumbrarnos a las dinámicas trabajo. 
                </p>
            </div>   
        </div>
    )
}

export default MePage;