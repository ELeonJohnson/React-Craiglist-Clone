import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import Header from './includes/Header.js'
import Home from './pages/Home.js'
import Listings from './pages/Listings.js'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Enoch'
    }
  }
  clickedBtn = () => {
    console.log('...')
  }
  render () {
    return (
      <Router>
      <div>
     <Header />
     <Router exact path="/" component={Home} />
     <Router exact path="/nyc/community/artists" component={Listings} />
    </div>
    </Router>
  )
  }
}
