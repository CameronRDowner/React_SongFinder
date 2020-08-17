import React, { useState } from 'react'
import { Consumer } from '../../../context';

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <Consumer>
            {value=>{
                <div>
                    <h2>Search for a song</h2>
                    <input type="text"></input>
                </div>
            }}
        </Consumer>
    )
}
