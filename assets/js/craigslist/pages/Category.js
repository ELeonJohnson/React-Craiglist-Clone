import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Category extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Enoch'
    }
  }
  render() {
    const {match, location, history} = this.props
    return (
      <div className="Category">
      <div className="container">
        this category is {match.params.category}
      </div>
      </div>
    )
  }

}
