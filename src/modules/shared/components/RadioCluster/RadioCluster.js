import React, {useState, useEffect} from 'react'
import styles from './RadioCluster.module.scss'
export const RadioCluster = (properties) => {
    const [toggledButton, setToggledButton] = useState('name');
    useEffect(() => {
      emitButtonClick(toggledButton)  
    }, [toggledButton])
    const emitButtonClick= (buttonName) => {
        properties.handleButtonClick(buttonName);
    }
    
    return (
        <div className="flex-container-row-start">
            {properties.buttonList.map(buttonName => (
                            <a onClick={()=>setToggledButton(buttonName)}><span className={`${(toggledButton === buttonName ? styles['button--toggled']: styles['button--untoggled'])} ${styles.button}`}>{buttonName}</span></a>
                        ))}
        </div>
    )
}
