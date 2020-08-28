import React, { Component} from 'react';
import axios from 'axios';

export const Context = React.createContext();

const reducer = (state, action)=>{
    switch(action.type){
        case 'SET_TRACK_LIST':{
            return {
                ...state,
                trackList: action.payload
            }
        }
        case 'SET_TRACKS_HEADING':{
            return {
                ...state,
                tracksHeading: action.payload
            }
        }
    }
}

export const Consumer = Context.Consumer;
export class Provider extends Component {
    state = {
        trackList: [],
        tracksHeading:"Top 10 Tracks",
        dispatch: action => this.setState(state=>reducer(state, action))
    }
    baseUrl = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1"
    apiKey = `&apikey=${process.env.REACT_APP_MM_KEY}`
    getTopTrackList = () =>{
        console.log(`${this.baseUrl}/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1${this.apiKey}`)
        return axios.get(`${this.baseUrl}/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1${this.apiKey}`)
    }
    componentDidMount(){
        this.getTopTrackList().then((result)=>{
            this.setState({trackList: result.data.message.body.track_list})
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render() {
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}