import React from 'react'
import styles from './NavBar.module.scss'
export const NavBar = () => {
    return (
        <nav className="flex-container-row-start">
           <span className={styles.logo}>SongHunter</span>
        </nav>
    )
}

