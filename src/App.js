import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NavBar} from './modules/main/components/NavBar.js';
import {HomePage} from './modules/main/pages/HomePage.js';
import {Provider} from './context.js';
import {Lyrics} from './modules/track/components/Lyrics';

function App() {
  return (
    <Provider>
    <Router>
    <React.Fragment>
      <NavBar/>
      <div id="router-wrapper">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/lyrics/track/:id" component={Lyrics}/>
        </Switch>
      </div>
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
