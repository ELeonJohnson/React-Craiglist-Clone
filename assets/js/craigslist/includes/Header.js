import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Enoch'
    }
  }
  clickedBtn = () => {
    console.log('...')
  }
  render() {
    return (<div className="container">
      <header>
        <div className={'left-menu'}>
          <div className={'logo'}>Craigslist</div>
          <div className={'city'}>Cleveland
            <i className={`fa fa-chevron-down`}></i>
          </div>
        </div>

        <div className={'right-menu'}>
          <div className={'user-img'}>img</div>
          <div className={'user-dropdown'}>my account
            <i className={`fa fa-chevron-down`}></i>
          </div>
          <div className={'post-btn'}>post to classifieds</div>
        </div>
      </header>
    </div>)
  }
}
