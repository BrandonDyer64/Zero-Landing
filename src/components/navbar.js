import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Zero Database
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/hosts">
                  Hosts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/certified">
                  Cerification
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/setup.md">
                  Setup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/host_certified">
                  Host Certification
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li>
                <a className="nav-link" href="/donate">
                  Donate
                </a>
              </li>
              <li>
                <a className="nav-link" href="http://host.zerodatabase.com">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
