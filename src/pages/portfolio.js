import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import * as portfolioStyles from './portfolio.module.scss';
import Head from '../components/head';

const PortfolioPage = () => {
    return (
        <Layout>
            <Head />
            <div className={portfolioStyles.portHead} >
                <h1>
                    PORTFOLIO
                </h1>
                <p>
                    Acá podrás ver mis trabajos:
                </p>
            </div>
            <div>
                <div className={portfolioStyles.worksDiv} >
                    <div className={portfolioStyles.workDiv} >
                        <a href="https://ibb.co/VBJrJvQ">
                            <img src="https://i.ibb.co/f0qBqCn/Captura-de-pantalla-de-2021-04-07-19-45-38-500x250.png" alt="Captura-de-pantalla-de-2021-04-07-19-45-38-500x250" border="0" />
                        </a>
                        <h3>ECOMMERCE</h3>
                        <p>
                            Tienda online para tickets a concientos en streaming. Desarrollada con Javascript, React-Redux, PostgreSQL-Sequalize-Express, Passport.
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
                        <a href="https://ibb.co/XLf495p">
                            <img src="https://i.ibb.co/c3KvP8t/Captura-de-pantalla-de-2021-04-07-20-00-47-500x250.png" alt="Captura-de-pantalla-de-2021-04-07-20-00-47-500x250" border="0"/>
                        </a>
                        <h3>GESTOR ESTUDIANTIL</h3>
                        <p>
                            Administrador de grupos de estudiantes: notas, asistencias, exámenes y demas. Desarrollado con TypeScrip, MongoDB-Mongoose-Express y React.
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
                        <a href="https://ibb.co/PjpRc9X">
                            <img src="https://i.ibb.co/V9ydgQn/Captura-de-pantalla-de-2021-04-08-01-20-18-500x250.png" alt="Captura-de-pantalla-de-2021-04-08-01-20-18-500x250" border="0" />
                        </a>
                        <h3>APP DE CLIMA</h3>
                        <p>
                            Simple app para recoger el clima de distintas ciudades. Desarollada con React-Redux, utilzia los datos de Open Wheather API
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
            </div>
        </Layout>



    )
}

export default PortfolioPage;