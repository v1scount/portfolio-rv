import React from 'react';
import * as footerStyles from './footer.module.scss';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.networks} >
                <Link to='https://github.com/v1scount' className={footerStyles.github} target='_blank' >
                    <FontAwesomeIcon icon={faGithub} className={footerStyles.github} />
                </Link>
                <Link to='https://www.linkedin.com/in/rodrigo-francisco-vellido-a7aa491b6/' className={footerStyles.linkedin} target='_blank' >
                    <FontAwesomeIcon icon={faLinkedin} className={footerStyles.linkedin} />
                </Link>
            </div>
            <p>rodrigovellido1@gmail.com</p>
        </footer>
    )
}

export default Footer;