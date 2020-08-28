import React, { useState } from 'react'
import { Consumer } from '../../../context';

export const Search = () => {
    const [trackSearchTerm, setTrackSearchTerm] = useState('');
    return (
        <Consumer>
            {value=>{ 
                return(
                <div>
                    <h2>Search for a song</h2>
                <form>
                    <input type="text" placeholder="Track Name" name="trackSearch" value={trackSearchTerm} onChange={event => setTrackSearchTerm(event.target.value)}></input>
                    <select>
                        <option>Name</option>
                        <option>Lyrics</option>
                    </select>
                    <button type="submit" name="searchSubmit">Search</button>
                </form>
                </div>
                )
            }}
        </Consumer>
    )
}
