import React from 'react';
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import Posts from './components/Posts';
import pageNotFound from './components/pageNotFound'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    
    <Router>
     
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />

        <ProtectedRoute path="/about" component={About} />
        <ProtectedRoute path="/contact" component={Contact} />
        <ProtectedRoute path="/posts/:post_id" component={Posts} />
        <ProtectedRoute component={pageNotFound}/>
        </Switch>

    </div>
  
    </Router>
    
  );
}     

export default App;
