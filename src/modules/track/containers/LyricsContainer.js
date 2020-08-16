import React, { useState, useEffect } from 'react';
import {Consumer} from '../../../context';

export const LyricsContainer = () => {
    const [track, setTrack] = useState({});
    const [lyrics, setLyrics] = useState({});
    
    return (
        <main>
            <Consumer>
            <h1>Lyrics</h1>
            </Consumer>
        </main>
    )
}
