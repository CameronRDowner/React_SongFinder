import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Track.module.scss';
export const Track = (properties) => {
    const {track} = properties;
    return (
        <div className={styles.wrapper}>
           <h5>{track.artist_name}</h5>
            <h6>{track.track_name}</h6>
            <h6>{track.album_name}</h6>
            <Link to={`lyrics/track/${track.track_id}`}>
            <span>View Lyrics</span>
        </Link>
        </div>
    )
}

