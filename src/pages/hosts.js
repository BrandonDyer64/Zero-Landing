import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Certified Hosts</h1>
        <a className="btn btn-dark right" href="/sponsor">
          Become a Sponsor
        </a>
        <h2>Sponsored Hosts</h2>
        <p>Proudly sponsored by these hosts</p>
        <ul>
          <li>None Yet</li>
        </ul>
        <a className="btn btn-dark right" href="/host_certified">
          Take the Test
        </a>
        <h2>Mission Critical</h2>
        <p>
          These hosts pride themeselves on security, reliability, and minimal
          downtime
        </p>
        <ul>
          <li>None Yet</li>
        </ul>
        <a className="btn btn-dark right" href="/host_certified">
          Take the Test
        </a>
        <h2>Others</h2>
        <p>
          Simple, yet effective, these hosts will get you up and running in no
          time.
        </p>
        <ul>
          <li>None Yet</li>
        </ul>
      </div>
    )
  }
}

export default App
