import React, { Component } from 'react';
import {Consumer} from '../../../context';
import {TracksSkeletonScreen} from '../components/TracksSkeletonScreen.js';
import {Track} from '../components/Track.js';

export const TracksContainer = () => {
    return (
        <main>
        <Consumer>
                {value => {
                 const {topTrackList} = value;

                 if(topTrackList === undefined || topTrackList === 0){
                    return <TracksSkeletonScreen/>;
                 }
                 else{
                    return (
                    <div id="tracks-container" className="flex-container-row-start">
                        {topTrackList.map(item => (
                            <Track key={item.track.track_id} track={item.track} />
                        ))}
                    </div>
                    )
                 }
                }}
        </Consumer>
        </main>
    )
}

