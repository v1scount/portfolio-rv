import React from 'react';
import Head from '../../components/head';
import * as meStyles from './me.module.scss';
import { Slide, Fade } from "react-awesome-reveal";


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
            <Fade
                triggerOnce
                damping='0.5'
                delay='25'
            >
                <div className={meStyles.education}>
                    <p>
                    Me gradué en el HENRY Bootcamp donde aprendí a través de +700 hs de clases en vivo y prácticas constantes que me formaron como desarrollador web.
                    Luego de la parte teórica-práctica del bootcamp realizamos dos proyectos de alcance real para afianzar lo aprendido, generar experiencia y acostumbrarnos a las dinámicas trabajo. 
                    </p>
                </div>   
            </Fade>
        </div>
    )
}

export default MePage;
