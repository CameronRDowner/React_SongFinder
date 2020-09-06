import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import {TextButton} from '../../../shared/components/TextButton/TextButton';
import styles from './Track.module.scss';
export const Track = (properties) => {
    const routeHistory = useHistory();
    const {track} = properties;
    const navigateToLyrics = () =>{
        routeHistory.push(`lyrics/track/${track.track_id}`)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles['property-wrapper']}><i className={`${styles.icon} fas fa-play`}></i><span className={styles.text}>{track.track_name}</span></div>
            <div className={styles['property-wrapper']}><i className={`${styles.icon} fas fa-record-vinyl`}></i><span className={styles.text}>{track.album_name}</span></div>
            <div className={styles['property-wrapper']}><i className={`${styles.icon} fas fa-user`}></i><span className={styles.text}>{track.artist_name}</span></div>
            <TextButton 
            buttonName={'View Lyrics'}
            altStyling={true}
            handleButtonClick={navigateToLyrics}
            />
        </div>
    )
}

