import React,{useEffect} from 'react'
import {NavLink,withRouter,Link } from "react-router-dom";
import auth from '../auth'
const Navbar = (props) => {
    console.log('nav',props)
    const authHandler=()=>{
        if (auth.isAuthenticated()===true) {
            auth.logout(()=>{
                props.history.push('/')
             
            }
            )
            console.log('hey',auth.isAuthenticated)
        } else {
            auth.login(()=>{
                props.history.push('/about')
            }
            )
        }
    }
    const authText = auth.isAuthenticated()?('Logout'):('Login')
    // useEffect(() => {
    //     setTimeout(() => {
    //         props.history.push('/about')
    //     }, 2000);
    // }, [props.history])

    console.log('auth',authText)
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" >Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="nav nav-tabs mr-auto">
            <li>  <NavLink className="nav-item nav-link" exact to="/">Home</NavLink></li>
            <li>  <NavLink className="nav-item nav-link" to="/about">About</NavLink></li>
            <li> <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink></li>
          </ul>
          <button  className="loginbtn btn btn-success navbar-btn" onClick={authHandler}>{authText}</button>
      </div>
  </nav>

    )
}

export default withRouter(Navbar)
