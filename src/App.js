import './App.css';
import React, { Component }  from 'react';
import Create from './components/create-client';
import Read from './components/read-client';
//import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route exact path='/create-client' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read-client' component={Read} />
        </div>

        
      </div>
    </Router>
  );
}

export default App;