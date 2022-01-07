// just type rfc 
import React from 'react'

//impt
import propTypes from 'prop-types'

// import {Link} from 'react-router-dom'




{/* ERRORS SOLVE BY APPLYING CLOSING TAG TO -> HR, IMG ,INPUT
    REPLACE class to className 
    href="/" to href ="/"    */}

//props accepted by function component
export default function Navbar(props) {
  return (

    // backtick below esc
    //template literal
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/"> */}
          {/* {props.title} */}
        {/* </Link> */}
         <a className="navbar-brand" href="#"> 
          {props.title}
        </a>
        <a></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li> */}
             <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li> */}
          </ul>

          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}


{/* =========================================COLOR MODES CHANGES====================================== */}
          <div className="d-flex">
            <div className="bg-primary rounded mx-2 " onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-danger rounded mx-2 " onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-success rounded mx-2 " onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-warning rounded mx-2 " onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-light rounded mx-2 " onClick={()=>{props.toggleMode('light')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            <div className="bg-dark rounded mx-2 " onClick={()=>{props.toggleMode('dark')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          </div>


            {/* //template literal */}
            {/* If props.mode===light THEN do it dark OTHERWISE do light */}
            {/* inside backtick &{} is JAVASCRIPT  
            CAN USE VARIABLE in JS by using $ symbol and {}
            inside this ${ternary operator} */}

          {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
          </div> */}

        </div>
      </div>
    </nav>
  )
}



//IF marked isRequired and not passed (also no deafult - comment default) then we get error in console
Navbar.propTypes = {
  title: propTypes.string.isRequired,
  about: propTypes.string,
}

// when parameter not passed then use this
Navbar.defaultProps = {
  title: "Your Title here",
  aboutText: "About text here"
}