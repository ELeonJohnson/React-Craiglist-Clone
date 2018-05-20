import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Details extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Enoch'
    }
  }
  render() {
    const {match, location, history} = this.props
    return (<div className="details-page">
      <div className="container">
        <div className="white-box">
        <section className="submenu">
          <div className="direction">
            <a href="#" className="prev">Prev</a>
            <a href="#" className="next">Next</a>
          </div>
          <nav className="sub-links">
            <a href="#">More Ads by User</a>
            <a href="#">Print</a>
            <a href="#">Share</a>
            <a href="#">Contact Seller</a>
          </nav>
        </section>

        <section className="content-area">
          <div className="media-column">
            <div className="gallery">
              <div className="slider">
                <div className="main-image">
                  <div className="arrows left-arrow"><i className="fa fa-angle-left"></i></div>
                  <div className="arrows right-arrow"><i className="fa fa-angle-right"></i></div>
                  <div className="image-1" style={{
                    "backgroundImage": "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GMrkjhkRRsWSDjLvob2L72Jt1sd_h3LNzcjJKpBlujGvZu5I')"
                  }}></div>
                </div>
              </div>
              <div className="thumbnails">
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GMrkjhkRRsWSDjLvob2L72Jt1sd_h3LNzcjJKpBlujGvZu5I')"
                }}></div>
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GMrkjhkRRsWSDjLvob2L72Jt1sd_h3LNzcjJKpBlujGvZu5I')"
                }}></div>
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GMrkjhkRRsWSDjLvob2L72Jt1sd_h3LNzcjJKpBlujGvZu5I')"
                }}></div>
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GMrkjhkRRsWSDjLvob2L72Jt1sd_h3LNzcjJKpBlujGvZu5I')"
                }}></div>
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GMrkjhkRRsWSDjLvob2L72Jt1sd_h3LNzcjJKpBlujGvZu5I')"
                }}></div>
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GMrkjhkRRsWSDjLvob2L72Jt1sd_h3LNzcjJKpBlujGvZu5I')"
                }}></div>
              </div>
            </div>
          </div>
          <div className="details-column">
            <div className="date">
              Posted: May 20th
            </div>
            <h3>Black 2017 Tesla</h3>
            <h4 className="price">price</h4>
            <div className="more-details">
              <div className="info">
                <label>Vin</label>
                <h5>dummy text</h5>
              </div>

              <div className="info">
                <label>Mileage</label>
                <h5>16248</h5>
              </div>

              <div className="info">
                <label>Transmission</label>
                <h5>Manual</h5>
              </div>
            </div>

            <div className="description">
              <p>This is where the description goes</p>
            </div>

          </div>

        </section>
      </div>
      </div>
    </div>)
  }

}
