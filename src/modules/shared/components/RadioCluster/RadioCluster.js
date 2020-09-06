import React, {useState, useEffect} from 'react'
import styles from './RadioCluster.module.scss'
export const RadioCluster = (properties) => {
    const [toggledButton, setToggledButton] = useState('Name');
    useEffect(() => {
      emitButtonClick(toggledButton)  
    }, [toggledButton])
    const emitButtonClick= (buttonName) => {
        properties.handleButtonClick(buttonName);
    }
    
    return (
        <div className="flex-container-row-center">
            {properties.buttonList.map(buttonName => (
                            <button 
                            onClick={()=>setToggledButton(buttonName)} 
                            className={`${(toggledButton === buttonName ? styles['button--toggled']: styles['button--untoggled'])} ${styles.button}`}
                            >
                            {buttonName}
                            </button>
                        ))}
        </div>
    )
}
