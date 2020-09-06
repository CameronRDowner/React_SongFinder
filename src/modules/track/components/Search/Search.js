import React, { useState } from 'react'
import { Consumer } from '../../../../context';
import { Textbox } from '../../../shared/components/Textbox/Textbox';
import { RadioCluster } from '../../../shared/components/RadioCluster/RadioCluster';
import { IconButton } from '../../../shared/components/IconButton/IconButton';
import styles from './Search.module.scss';
export const Search = (properties) => {
    const [trackSearchTerm, setTrackSearchTerm] = useState('');
    const [searchBy, setSearchBy] = useState('Name');
    const handleSearchButtonClick = (event) => {
        event.preventDefault();
        if(searchBy === "Name"){
            properties.SearchByTrackName(trackSearchTerm)
        }
        else{
            properties.SearchByTrackLyric(trackSearchTerm)
        }
    }
    return (
        <Consumer>
            {value=>{ 
                return(
                <form className={styles['main-wrapper']} onSubmit={handleSearchButtonClick}>
                    <div className={styles['controls-wrapper']}>
                        <Textbox name={trackSearchTerm} placeholder={`Song ${searchBy}...`} value={trackSearchTerm} handleChange={setTrackSearchTerm}/>
                        <IconButton iconClasses="fas fa-search" submit="submit"/>
                    </div>
                    <div className="flex-container-row-center">
                        <span className={styles['radio-label']}>Search by: </span>
                        <RadioCluster handleButtonClick={setSearchBy} buttonList={['Name', 'Lyric']}/>
                    </div>
                </form>
                )
            }}
        </Consumer>
    )
}
