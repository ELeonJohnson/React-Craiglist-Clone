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
    const {match, location, history} = this.props
    return (
      <div className="listings">
      <div className="container">
        
      </div>
      </div>
    )
  }

}
