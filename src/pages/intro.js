import React from 'react';
import * as introStyle from './intro.module.scss';
import { Link } from 'gatsby';
import { AttentionSeeker, Fade } from "react-awesome-reveal";


const IntroPage = () => {
    return (
        <div className={introStyle.container} >
            <AttentionSeeker
                effect='tada'
                triggerOnce
            >
                <img src="https://res.cloudinary.com/ddedreqhg/image/upload/v1619027384/Portfolio/p-hi_sue61i.png" alt='computer-hi' />
            </AttentionSeeker>
            <Fade
                cascade='true'
                triggerOnce
                damping='0.5'
            >
                <h1>Hola! Mi nombre es <b className={introStyle.name} >Rodrigo Vellido</b></h1>
                <h1>Y soy un desarrollador web</h1>
                <Link to='#me' >
                    <button className={introStyle.introBtn} >
                        CONOCEME
                    </button>
                </Link>
            </Fade>
        </div>
    )
}

export default IntroPage;