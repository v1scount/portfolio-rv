import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <p>La mejor forma de contactarme es a traves de mi email rodrigovellido1@gmail.com</p>
            <p>Puedes ver mi perfil de LinkedIn <Link to='https://www.linkedin.com/in/rodrigo-francisco-vellido-a7aa491b6/'>aqui.</Link></p>
        </Layout>
    )
}

export default ContactPage;