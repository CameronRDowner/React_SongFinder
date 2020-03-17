import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NavBar} from './components/NavBar.js';
import {HomePage} from './pages/HomePage.js';

function App() {
  return (
    <Router>
    <React.Fragment>
      <NavBar/>
      <div id="router-wrapper">
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </div>
    </React.Fragment>
    </Router>
  );
}

export default App;
