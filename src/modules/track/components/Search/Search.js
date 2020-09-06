import React, { useState } from 'react'
import { Consumer } from '../../../../context';
import { Textbox } from '../../../shared/components/Textbox/Textbox';
import { RadioCluster } from '../../../shared/components/RadioCluster/RadioCluster';
import { IconButton } from '../../../shared/components/IconButton/IconButton';
import styles from './Search.module.scss';
export const Search = (properties) => {
    const [trackSearchTerm, setTrackSearchTerm] = useState('');
    const [searchBy, setSearchBy] = useState('name');
    const handleSearchButtonClick = (event) => {
        event.preventDefault();
        if(searchBy === "name"){
            properties.SearchByTrackName(trackSearchTerm)
        }
        else{
            properties.SearchByTrackLyrics(trackSearchTerm)
        }
    }
    return (
        <Consumer>
            {value=>{ 
                return(
                <form class={styles.wrapper} onSubmit={handleSearchButtonClick}>
                    <Textbox name={trackSearchTerm} placeholder={`Song ${searchBy}...`} value={trackSearchTerm} handleChange={setTrackSearchTerm}/>
                    <IconButton iconClasses="fas fa-search" submit="submit"/>
                    <RadioCluster handleButtonClick={setSearchBy} buttonList={['name', 'lyrics']}/>
                </form>
                )
            }}
        </Consumer>
    )
}
