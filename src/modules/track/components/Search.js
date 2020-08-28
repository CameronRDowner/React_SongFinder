import React, { useState } from 'react'
import { Consumer } from '../../../context';

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
                    <input type="text" placeholder="Track Name" name="trackSearch" value={trackSearchTerm} onChange={event => setTrackSearchTerm(event.target.value)}></input>
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
