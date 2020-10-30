import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Greeting from './components/greeting/Greeting';
import Content from './components/content/Content';
import './App.css';

function App() {
  return (
      <div className="App">
        <Greeting/>
        <Router>
            <Navigation />
            <Content/>
        </Router>
      </div>
  );
}

export default App;
