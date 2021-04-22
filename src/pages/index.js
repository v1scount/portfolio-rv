import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import Technologies from './tech/technologies';
import PortfolioPage from './portfolio/portfolio';
import ContactPage from './contact/contact';
import MePage from './me/me';
import IntroPage from './intro';
import Scroll from '../components/scroll';

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <Scroll showBelow={250} />
      <IntroPage />
      <section id='me'>
        <MePage />
      </section>
      <section id='tech'>
        <Technologies />
      </section>
      <section id='portfolio'>
        <PortfolioPage />
      </section>
      <section id='contact'>
        <ContactPage />
      </section>
    </Layout>
  )
}

export default IndexPage;