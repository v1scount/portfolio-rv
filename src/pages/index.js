import React from 'react';
import Layout from '../components/layout';
import * as indexStyles from './index.module.scss';

const IndexPage = () => {
  return (
    <Layout>
      <h1 className={indexStyles.headers}>SOBRE MI</h1>
      <div className={indexStyles.personalDescription} >
        <a href="https://ibb.co/FgY9ds7" /><img src="https://i.ibb.co/FgY9ds7/20210309-194214-2-01.jpg" alt="20210309-194214-2-01" className={indexStyles.profilePic} ></img>
        <p>
          Soy un desarrollador Fullstack de Córdoba, Argentina con el objetivo constante de aprender nuevas tecnologías para ampliar mi abanico de conocimientos. Me concentro en resolver los problemas que se me presentan de manera simple y directa, tratando de ser lo más eficaz posible. Aunque puedo desempeñarme en el front-end mi principal interés es el back-end.
        </p>
      </div>
      <div className={indexStyles.education}>
        <h2 className={indexStyles.headers} >
          EDUCACION
        </h2>
        <p>
        Soy un graduado del HENRY Bootcamp, donde aprendí a través de +700hs de clases en vivo y prácticos constantes los principales stacks del desarrollo web. Luego de la parte teorica-practica en HENRY trabajamos en dos proyectos labs para afianzar y poner en práctica de manera real los conocimientos aprendidos. Allí desarrolle, junto a dos trabajos de equipo distintos y aplicando las metodologías SCRUM, un ecommerce como primer proyecto y luego un sitio de gestión estudiantil ficticio para HENRY mismo.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage;