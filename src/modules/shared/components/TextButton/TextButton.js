import React from 'react'
import styles from './TextButton.module.scss';
export const TextButton = (properties) => {
    return (
    <button
    className={`${styles.button} ${(properties.altStyling !== undefined ? styles['button--alt'] : styles['button--primary'])}`} 
    type={(properties.submit !== undefined ? "submit" : "button")}
    onClick={properties.handleButtonClick}
    >{properties.buttonName}</button>
    )
}
