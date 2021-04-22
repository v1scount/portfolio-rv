import React from 'react';
import * as introStyle from './intro.module.scss';
import { Link } from 'gatsby';

const IntroPage = () => {
    return (
        <div className={introStyle.container} >
            <img src="https://res.cloudinary.com/ddedreqhg/image/upload/v1619027384/Portfolio/p-hi_sue61i.png" alt='computer-hi' />
            <h1>Hola! Mi nombre es <b className={introStyle.name} >Rodrigo Vellido</b></h1>
            <h1>Soy desarrollador web</h1>
            <Link to='#me' >
                <button className={introStyle.introBtn} >
                    CONOCEME
                </button>
            </Link>
        </div>
    )
}

export default IntroPage;