import React from 'react';
import styles from './Lyrics.module.scss';
export const Lyrics = (properties) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.lyrics}>{properties.lyrics.lyrics_body}</p>
        </div>
    )
}
