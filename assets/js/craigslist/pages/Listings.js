import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Listings extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Enoch'
    }
  }
  render() {
    return (
      <div className="listings">
      <div className="container">
        LISTINGS PAGE
      </div>
      </div>
    )
  }

}
