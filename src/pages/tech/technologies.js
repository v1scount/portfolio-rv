import React from 'react';
import * as technologiesStyles from './technologies.module.scss';
import { ReactJs, Html5, Redux, Express, NodeDotJs, CssThree, Sass, Javascript, Postgresql, Mongodb, Gatsby } from '@icons-pack/react-simple-icons';
import Head from '../../components/head';
import { Slide } from "react-awesome-reveal";


const Technologies = () => {
    return (
        // <Layout>
        <div className={technologiesStyles.tech}>
            <Head />
            <div className={technologiesStyles.techHead} >
                <Slide 
                    triggerOnce
                    duration='1500'
                >
                    <h1>
                        TECNOLOGIAS
                    </h1>
                </Slide>
                <p>
                    Este es mi skillset de tecnologías:
                </p>
            </div>
            <div className={technologiesStyles.techDiv} >
                <div className={technologiesStyles.iconDiv} >
                    <Html5 size={62} className={technologiesStyles.icon}/>
                    <p>HTML</p>
                </div>
                <div className={technologiesStyles.iconDiv}>
                    <CssThree size={62} className={technologiesStyles.icon} />
                    <p>CSS</p>
                </div>
                <div className={technologiesStyles.iconDiv}>
                    <Sass size={62} className={technologiesStyles.icon}/>
                    <p>SASS</p>
                </div>
                <div className={technologiesStyles.iconDiv}>
                    <Javascript size={62} className={technologiesStyles.icon}/>
                    <p>Javascript</p>
                </div>
                <div className={technologiesStyles.iconDiv}>
                    <NodeDotJs size={62} className={technologiesStyles.icon}/>
                    <p>Node.js</p>
                </div>
                <div className={technologiesStyles.iconDiv}>
                    <ReactJs size={62} className={technologiesStyles.icon}/>
                    <p>React</p>
                </div>
                <div className={technologiesStyles.iconDiv}>
                    <Redux size={62} className={technologiesStyles.icon}/>
                    <p>Redux</p>
                </div>
                <div className={technologiesStyles.iconDiv}>
                    <Express size={62} className={technologiesStyles.icon}/>
                    <p>Express</p>
                </div>
                <div className={technologiesStyles.iconDiv}>
                    <Postgresql size={62} className={technologiesStyles.icon}/>
                    <p>PostgreSQL</p>
                </div>
                <div className={technologiesStyles.iconDiv}>
                    <Mongodb size={62} className={technologiesStyles.icon}/>
                    <p>MongoDB</p>
                </div>
                <div className={technologiesStyles.iconDiv}>
                    <Gatsby size={62} className={technologiesStyles.icon}/>
                    <p>Gatsby</p>
                </div>
            </div>
        </div>
        // </Layout>
    )
}

export default Technologies;