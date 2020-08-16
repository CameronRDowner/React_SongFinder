import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NavBar} from './modules/main/components/NavBar.js';
import {Provider} from './context.js';
import {LyricsContainer} from './modules/track/containers/LyricsContainer';
import { TracksContainer } from './modules/track/containers/TracksContainer';

export const App = () => {
  return (
    <Provider>
    <Router>
    <React.Fragment>
      <NavBar/>
      <div id="router-wrapper">
        <Switch>
          <Route exact path="/" component={TracksContainer}/>
          <Route path="/lyrics/track/:id" component={LyricsContainer}/>
        </Switch>
      </div>
    </React.Fragment>
    </Router>
    </Provider>
  )
}

