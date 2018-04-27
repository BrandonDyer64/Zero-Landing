import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/navbar'

import Home from './pages/home'
import Hosts from './pages/hosts'
import Donate from './pages/donate'
import NotFound from './pages/notFound'

class App extends Component {
  render() {
    return (
      <Router>
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
          </div>
        </div>
      </Router>
    )
  }
}

export default App
