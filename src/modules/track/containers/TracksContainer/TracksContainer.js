import React, { useContext } from 'react';
import {Consumer} from '../../../../context';
import {TrackSkeletonScreen} from '../../components/TrackSkeletonScreen/TrackSkeletonScreen.js';
import {Track} from '../../components/Track/Track.js';
import {Search} from '../../components/Search/Search';
import axios from 'axios';
import {Context} from '../../../../context';
import styles from './TracksContainer.module.scss';
import {useHistory} from 'react-router-dom';

export const TracksContainer = () => {
    const baseUrl = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?";
    const pageConfigURL = "&page_size=10&page=1&s_track_rating=desc";
    const apiKeyUrl = `&apikey=${process.env.REACT_APP_MM_KEY}`;
    const {dispatch} = useContext(Context)
    const routeHistory = useHistory();
    const handleSearchByTrackName = (_trackName) => {
        getTrackByName(_trackName)
        .then(result=>{
            console.log(result.data)
            setTrackList(result.data.message.body.track_list);
            setTracksHeading('Search Results');
        })
        .catch(_error=>{
            console.log(_error);
        })
    }
    const handleSearchByTrackLyric = (_trackLyrics) => {
        getTrackByLyric(_trackLyrics).then(result=>{
            setTrackList(result.data.message.body.track_list)
            setTracksHeading('Search Results');
        })
        .catch(_error=>{
            console.log(_error)
        })
    }
    const getTrackByName = (trackName) =>{
        console.log(`${baseUrl}q_track=${trackName}${pageConfigURL}${apiKeyUrl}`)
        return axios.get(`${baseUrl}q_track=${trackName}${pageConfigURL}${apiKeyUrl}`)
    }
    const getTrackByLyric = (trackLyrics) =>{
        return axios.get(`${baseUrl}q_lyrics=${trackLyrics}${pageConfigURL}${apiKeyUrl}`)
    }
    const setTrackList = (_trackList) =>{
        dispatch({
            type: 'SET_TRACK_LIST',
            payload: _trackList
        });
    }
    const setTracksHeading = (_tracksHeading) => {
        dispatch({
            type: 'SET_TRACKS_HEADING',
            payload: _tracksHeading
        })
    }
    const navigateToLyrics = (trackId) =>{
        routeHistory.push(`lyrics/track/${trackId}`)
    }
    return (
        <main>
            <Search SearchByTrackLyric={handleSearchByTrackLyric} SearchByTrackName={handleSearchByTrackName}/>
        <Consumer>
                {value => {
                 const {trackList, tracksHeading} = value;
                    
                 if(trackList === undefined || trackList.length === 0){
                    return (
                    <>
                    <h3 className={styles['tracks-heading']}>{tracksHeading}</h3>
                    <div className={styles['tracks-container']}>
                        {Array(10).fill(null).map(item => (
                            <TrackSkeletonScreen/>
                        ))
                        }
                    </div>
                    </>
                    );
                 }
                 else{
                    return (
                    <>
                    <h3 className={styles['tracks-heading']}>{tracksHeading}</h3>
                    <div className={styles['tracks-container']}>
                        {trackList.map(item => (
                            <Track handleLyricsButtonClick={navigateToLyrics} key={item.track.track_id} track={item.track} />
                        ))}
                    </div>
                    </>
                    )
                 }
                }}
        </Consumer>
        </main>
    )
}

