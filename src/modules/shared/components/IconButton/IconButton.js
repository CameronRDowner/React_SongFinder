import React from 'react'
import styles from './IconButton.module.scss';
export const IconButton = (properties) => {
    return (
        <button 
        className={styles.button} 
        type={(properties.submit !== undefined ? 'submit' : 'button')} 
        onClick={()=>properties.handleButtonClick}>
            <i className={`${properties.iconClasses} ${styles.icon}`}></i>
        </button>
    )
}
