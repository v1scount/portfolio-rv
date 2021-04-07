import React from 'react';
// import { Button, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import * as headerStyles from './header.module.scss';


const Header = () => {
    
    return (
        <header className={headerStyles.header}>
            <nav className={headerStyles.navDiv}>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link to='/' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
                            SOBRE MI
                        </Link>
                    </li>
                    <li>
                        <Link to='/technologies' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
                            TECNOLOGIAS
                        </Link>
                    </li>
                    <li>
                        <Link to='/portfolio' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
                            PORTFOLIO
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
                            CONTACTO
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;