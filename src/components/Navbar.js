import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.name}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
        <div className="custom-control custom-switch">
  <input type="checkbox" onClick = {props.toggleMode} className="custom-control-input" id="customSwitch1"/>
  <label className={`custom-control-label text-${props.btnColor} mx-2`}  htmlFor="customSwitch1">Enable {props.btnColor} Mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {name: PropTypes.string,
                    search: PropTypes.string
}

Navbar.defaultProps = {
    name : "Aditya Nagare",
    search : "I am Search"
}