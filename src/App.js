import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,auth} from './action/index'
// import Home from './components/Home'
// import Contact from './components/Contact'
// import About from './components/About'
// import Navbar from './components/Navbar'
// import Posts from './components/Posts';
// import pageNotFound from './components/pageNotFound'
// import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
// import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const counter = useSelector(state => state.counter)
  const Login = useSelector(state => state.Login)
  const dispatch = useDispatch()
  const btntxt= Login?('logout'):('login')
  return (
    
    // <Router>
     
    <div className="App">
      <h1>Counter{counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <h1>{Login?('logged in'):('not login')}</h1>
      <p></p>
      <button onClick={()=>dispatch(auth())}>{btntxt}</button>
      {/* <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />

        <ProtectedRoute path="/about" component={About} />
        <ProtectedRoute path="/contact" component={Contact} />
        <ProtectedRoute path="/posts/:post_id" component={Posts} />
        <ProtectedRoute component={pageNotFound}/>
        </Switch> */}


    </div>
  
    // </Router>
    
  );
}     

export default App;
