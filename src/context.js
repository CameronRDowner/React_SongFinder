import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const Context = React.createContext();
export const Consumer = Context.Consumer;
export class Provider extends Component {
    state = {
        topTrackList: []
    }
    baseUrl = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1"
    apiKey = `&apikey=${process.env.REACT_APP_MM_KEY}`
    getTopTrackList = () =>{
        return axios.get(`${this.baseUrl}/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1${this.apiKey}`)
    }
    componentDidMount(){
        this.getTopTrackList().then((result)=>{
            this.setState({topTrackList: result.data.message.body.track_list})
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