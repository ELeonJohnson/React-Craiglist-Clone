import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Gallery from './components/Gallery.js'

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
            <Gallery />
          </div>
          <div className="details-column">
            <div className="date">
              Posted: May 20th
            </div>
            <h3 className="title">Black 2017 Tesla</h3>
            <h4 className="price">$55,000</h4>
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
              <label>Description</label>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
           </div>


        </section>
      </div>
      </div>
    </div>)
  }

}
