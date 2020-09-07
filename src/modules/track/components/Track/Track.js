import React from 'react'
import {TextButton} from '../../../shared/components/TextButton/TextButton';
import styles from './Track.module.scss';
export const Track = (properties) => {
    const {track} = properties;
    return (
        <div className={styles['wrapper']}>
            <div>
                <div className={styles['song-name']}>{track.track_name}</div>
                <div className={styles.property}><i className={`${styles.icon} fas fa-record-vinyl`}></i>{track.album_name}</div>
                <div className={styles.property}><i className={`${styles.icon} fas fa-user`}></i>{track.artist_name}</div>
            </div>
            <TextButton 
            buttonName={'View Lyrics'}
            altStyling={true}
            handleButtonClick={()=>properties.handleLyricsButtonClick(track.track_id)}
            />
        </div>
    )
}

