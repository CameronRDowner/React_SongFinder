import React, { useState } from 'react'
import { Consumer } from '../../../../context';
import { Textbox } from '../../../shared/components/Textbox/Textbox';

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
                <div>
                    <h2>Search for a song</h2>
                <form onSubmit={handleSearchButtonClick}>
                    <Textbox name={trackSearchTerm} placeholder={`Song ${searchBy}...`} value={trackSearchTerm} handleChange={setTrackSearchTerm}/>
                    <select value={searchBy} onChange={event => setSearchBy(event.target.value)}>
                        <option value={'name'}>Name</option>
                        <option value={'lyrics'}>Lyrics</option>
                    </select>
                    <button type="submit" name="searchSubmit">Search</button>
                </form>
                </div>
                )
            }}
        </Consumer>
    )
}
