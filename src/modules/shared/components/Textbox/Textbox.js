import React from 'react'
import styles from './Textbox.module.scss'
export const Textbox = (properties) => {
    return (
        <input className={styles.textbox} type="text" 
        name={properties.name} 
        placeholder={properties.placeholder}
        value={properties.value} 
        onChange={event=>{properties.handleChange(event.target.value)}}
        />
    )
}
