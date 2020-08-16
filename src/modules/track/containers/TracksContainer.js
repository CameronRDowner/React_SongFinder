import React, { Component } from 'react';
import {Consumer} from '../../../context';
import {TracksSkeletonScreen} from '../components/TracksSkeletonScreen.js';
import {Track} from '../components/Track.js';

export const TracksContainer = () => {
    return (
        <Consumer>
                {value => {
                 const {track_list} = value;

                 if(track_list === undefined || track_list.length === 0){
                    return <TracksSkeletonScreen/>;
                 }
                 else{
                    return (
                    <div id="tracks-container" className="flex-container-row-start">
                        {track_list.map(item => (
                            <Track key={item.track.track_id} track={item.track} />
                        ))}
                    </div>
                    )
                 }
                }}
        </Consumer>
    )
}

