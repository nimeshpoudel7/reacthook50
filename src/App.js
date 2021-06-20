import React from 'react';
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import Posts from './components/Posts';
import pageNotFound from './components/pageNotFound'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

function App() {
  return (
    
    <Router>
     
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/posts/:post_id" component={Posts} />
        <Route component={pageNotFound}/>
        </Switch>

    </div>
  
    </Router>
    
  );
}     

export default App;
