import React from 'react'
import {Link} from 'react-router-dom';

export const Track = (properties) => {
    const {track} = properties;
    const trackStyles = {
        width : '10rem',
        backgroundColor : '#ff9999',
        margin : '1rem'
    
    }
    return (
        <div id="track" style={trackStyles}>
           <h5>{track.artist_name}</h5>
            <h6>{track.track_name}</h6>
            <h6>{track.album_name}</h6>
            <Link to={`lyrics/track/${track.track_id}`}>
            <span>View Lyrics</span>
        </Link>
        </div>
    )
}

