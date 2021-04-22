import React from 'react';
import { Link } from 'gatsby';
import * as portfolioStyles from './portfolio.module.scss';
import Head from '../../components/head';
import { Slide, Fade } from "react-awesome-reveal";


const PortfolioPage = () => {
    return (
        <div className={portfolioStyles.port}>
            <Head />
            <div className={portfolioStyles.portHead} >
                <Slide 
                    triggerOnce
                    duration='1500'
                >
                    <h1>
                        PORTFOLIO
                    </h1>
                </Slide>
                <Fade
                    triggerOnce
                >
                    <p>
                        Acá podrás ver mis trabajos:
                    </p>    
                </Fade>
            </div>
            <Fade
                cascade='true'
                triggerOnce
                damping='0.5'
                delay='25'
            >

                <div className={portfolioStyles.worksDiv} >
                    <div className={portfolioStyles.workDiv} >
                        <img src="https://i.ibb.co/f0qBqCn/Captura-de-pantalla-de-2021-04-07-19-45-38-500x250.png" alt="Captura-de-pantalla-de-2021-04-07-19-45-38-500x250" border="0" />
                        <h3>ECOMMERCE</h3>
                        <p>
                            Tienda online de tickets a conciertos en streaming. Desarrollada con Javascript, React-Redux, PostgreSQL-Sequalize-Express, Passport.
                        </p>
                        <div className={portfolioStyles.buttonDiv}>
                            <Link to='https://ecommerce-tickets.vercel.app/' target='_blank' >
                                <button className={portfolioStyles.portBtn} >
                                    SITIO
                                </button>
                            </Link>
                            <Link to='https://github.com/v1scount/ecommerce-tickets' target='_blank' >
                                <button className={portfolioStyles.portBtn}>
                                    REPOSITORIO
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={portfolioStyles.workDiv} >
                        <img src="https://res.cloudinary.com/ddedreqhg/image/upload/v1619027868/Portfolio/Captura_de_pantalla_de_2021-04-07_20-00-47-500x250_rtu56y.png" alt="HenryApp-screenshot" border="0"/>
                        <h3>GESTOR ESTUDIANTIL</h3>
                        <p>
                            Administrador de estudiantes: notas, asistencias, exámenes y demás. Desarrollado con TypeScript, MongoDB-Mongoose-Express y React-Redux.
                        </p>
                        <div className={portfolioStyles.buttonDiv}>
                            <Link to='https://github.com/MarceloSpagnuolo/Proyecto-Final-ft07-04/tree/main' target='_blank'>
                                <button className={portfolioStyles.portBtn}>
                                    REPOSITORIO
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={portfolioStyles.workDiv} >
                        <img src="https://i.ibb.co/V9ydgQn/Captura-de-pantalla-de-2021-04-08-01-20-18-500x250.png" alt="Captura-de-pantalla-de-2021-04-08-01-20-18-500x250" border="0" />
                        <h3>APP DE CLIMA</h3>
                        <p>
                            Simple app para recoger el clima de distintas ciudades. Desarrollada con React-Redux, utiliza los datos de Open Wheather API
                        </p>
                        <div className={portfolioStyles.buttonDiv} >
                            <Link to='https://weather-app-henry.herokuapp.com/' target='_blank' >
                                <button className={portfolioStyles.portBtn}>
                                    SITIO
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default PortfolioPage;
