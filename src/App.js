import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import Container from './components/Container';
import Scrollup from './components/scrollup/Scrollup';
import './App.css';

function App() {
  return (
    <div>
      <div id="bodyHeight">
        <Route path='/' component={Scrollup}/>
        <Route path="/" component={Nav}/>
        <Route exact path="/" component={Container} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/about" component={About}/>
      </div>
      <Route path="/" component={Footer}/>
    </div>
  );
}

export default App;
