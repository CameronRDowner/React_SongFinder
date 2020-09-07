import React from 'react';
import styles from './NavBar.module.scss';
import {useHistory, Link} from 'react-router-dom';
export const NavBar = () => {
    const routeHistory = useHistory();
    return (
        <nav className="flex-container-row-start">
           <Link to='/' style={{ textDecoration: 'none'}}><span className={styles.logo}>SongHunter</span></Link>
        </nav>
    )
}

