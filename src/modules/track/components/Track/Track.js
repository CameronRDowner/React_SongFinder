import React from 'react'
import {TextButton} from '../../../shared/components/TextButton/TextButton';
import styles from './Track.module.scss';
export const Track = (properties) => {
    const {track} = properties;
    return (
        <div className={styles.wrapper}>
            <div className={styles['property-wrapper']}><i className={`${styles.icon} fas fa-play`}></i><span className={styles.text}>{track.track_name}</span></div>
            <div className={styles['property-wrapper']}><i className={`${styles.icon} fas fa-record-vinyl`}></i><span className={styles.text}>{track.album_name}</span></div>
            <div className={styles['property-wrapper']}><i className={`${styles.icon} fas fa-user`}></i><span className={styles.text}>{track.artist_name}</span></div>
            <TextButton 
            buttonName={'View Lyrics'}
            altStyling={true}
            handleButtonClick={()=>properties.handleLyricsButtonClick(track.track_id)}
            />
        </div>
    )
}

