import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Lyrics } from '../../Lyrics/Lyrics';
import {TrackInfo} from '../../components/TrackInfo/TrackInfo';
import styles from './LyricsContainer.module.scss';

export const LyricsContainer = (properties) => {
    const [track, setTrack] = useState({});
    const [lyrics, setLyrics] = useState({});
    const baseUrl = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/"
    const apiKeyUrl = `&apikey=${process.env.REACT_APP_MM_KEY}`
    const trackIdUrl = `?track_id=${properties.match.params.id}${apiKeyUrl}`
    const getTrackLyrics = () =>{
        return axios.get(`${baseUrl}track.lyrics.get${trackIdUrl}`)
    }
    const getTrackInfo = () =>{
        return axios.get(`${baseUrl}track.get${trackIdUrl}`)
    }
    useEffect(()=>{
        getTrackLyrics().then((response)=>{
            console.log(response.data.message.body.lyrics)
            setLyrics(response.data.message.body.lyrics);
        })
        .catch((error)=>{
            console.log(error);
        })
        getTrackInfo().then((response)=>{
            setTrack(response.data.message.body.track)
        })
    }, [])
    return ( 
        <main>
        <TrackInfo track={track} />
        <h2 className={styles.heading}>Lyrics</h2>
        <Lyrics lyrics={lyrics}/>
        </main>
        )
}
