import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div>
    <Header></Header>
    <div className="main-container">
      <Router>
        <Homepage path="/"/>
        <Login path="/login/"/>
      </Router>
    </div>
    </div>
  );
}

export default App;
