import React from 'react';
import Head from '../../components/head';
import * as meStyles from './me.module.scss';

const MePage = () => {
    return(
        <div className={meStyles.me}>
            <Head />
            <h1 className={meStyles.headers}>SOBRE MI</h1>
            <div className={meStyles.education}>
                <p>
                Soy un graduado del HENRY Bootcamp donde aprendí a través de +700hs de clases en vivo y pŕacticas constantes que me formaron como desarrollador web.
                Luego de la parte teorica-practica del bootcamp realizamos en dos proyectos de alcance real para afianzar lo aprendido, generar experiencia y acostumbrarnos a las dinámicas trajo. 
                </p>
            </div>   
        </div>
    )
}

export default MePage;