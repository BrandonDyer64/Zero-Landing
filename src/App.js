import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/navbar'

import Home from './pages/home'
import Hosts from './pages/hosts'
import Donate from './pages/donate'
import NotFound from './pages/notFound'

console.log('this is react')

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/hosts" component={Hosts} />
              <Route path="/certified" component={Home} />
              <Route path="/host_certified" component={Home} />
              <Route path="/setup" component={Home} />
              <Route path="/donate" component={Donate} />
              <Route path="*" component={NotFound} />
            </Switch>
            <hr />
            <p className="align-right">
              This site is open source.{' '}
              <a
                target="_blank"
                href="https://github.com/BrandonDyer64/Zero-Landing"
              >
                Improve this page
              </a>.
            </p>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
