import React, { Component } from 'react';
import {Consumer} from '../../../context';
import {TracksSkeletonScreen} from './TracksSkeletonScreen.js';
import {Track} from './Track.js';

const tracksContainerStyles = {
    display : 'flex',
    flexDirection : 'row',
    flexWrap : 'wrap'
}

export class TracksContainer extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                 const {track_list} = value;

                 if(track_list === undefined || track_list.length === 0){
                    return <TracksSkeletonScreen/>;
                 }
                 else{
                    return (
                    <div id="tracks-container" style={tracksContainerStyles}>
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
}
