import React from 'react';
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/About" component={About}/>
    </div>
    </Router>
    
  );
}     

export default App;
