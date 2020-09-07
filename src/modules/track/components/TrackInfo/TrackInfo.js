import React from 'react'
import styles from './TrackInfo.module.scss';
export const TrackInfo = (properties) => {
    return (
        <div className={`${styles.wrapper} flex-container-row-start`}>
            <span><i className={`${styles.icon} fas fa-music`}></i>{properties.track.track_name}</span>
            <span><i className={`${styles.icon} fas fa-record-vinyl`}></i>{properties.track.album_name}</span>
            <span><i className={`${styles.icon} fas fa-user`}></i>{properties.track.artist_name}</span>
        </div>
    )
}
