import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Track.module.scss';
export const Track = (properties) => {
    const {track} = properties;
    return (
        <div className={styles.wrapper}>
            <div className={styles['property-wrapper']}><i className={`${styles.icon} fas fa-play`}></i><span className={styles.text}>{track.track_name}</span></div>
            <div className={styles['property-wrapper']}><i className={`${styles.icon} fas fa-record-vinyl`}></i><span className={styles.text}>{track.album_name}</span></div>
            <div className={styles['property-wrapper']}><i className={`${styles.icon} fas fa-user`}></i><span className={styles.text}>{track.artist_name}</span></div>
            <Link to={`lyrics/track/${track.track_id}`}>
            <span>View Lyrics</span>
        </Link>
        </div>
    )
}

