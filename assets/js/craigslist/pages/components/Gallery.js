import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
     allImgs: '',
     currentImg: '',
     currentIndex: 0
    }
  }

  componentWillMount() {
    const allImgs =  [
    "https://cdn.shopify.com/s/files/1/1724/5219/articles/black-tesla-model-s-ts7-p100d-ts115-21in-02_3c144351-0869-415d-adb2-da694f0d7402.jpg?v=1492018433",
    "https://i.ytimg.com/vi/Eb41ppq-ATU/maxresdefault.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/6108Whli%2BfL._SX425_.jpg",
    "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/tesla-model-x-p90-black-2017-pa-%282%29.jpg",
    "http://allstarmotorsports.gallery/images/storage/252d7922/venue_59d450e29fe427f3061.jpg",
    "https://boygeniusreport.files.wordpress.com/2016/06/wenmg3e.jpg?quality=98&strip=all&w=782",
  ]
    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex]
    })
  }

  allImgsLoop = () => {
    return this.state.allImgs.map((item, i) => {
      return(
        <div key={i} onClick={this.clickedThumb.bind(null, i)} className="thumb-img" style={{
          "backgroundImage": `url('${item}')`
        }}></div>
      )
    })
  }

nextBtn = () => {
  if(this.state.currentIndex != (this.state.allImgs.length - 1)) {
    this.setState({
      currentIndex: this.state.currentIndex + 1
  })
  }
}

prevBtn = () => {
  if(this.state.currentIndex != 0) {
    this.setState({
      currentIndex: this.state.currentIndex - 1
   })
 }
}

clickedThumb = (index) => {
  this.setState({
    currentIndex: index
  })
}

  render(){
    const {match, location, history} = this.props
    return (
            <div className="gallery">
              <div className="slider">
                <div className="main-image">
                  <div className="arrows left-arrow" onClick={this.prevBtn}><i className="fa fa-angle-left"></i></div>
                  <div className="arrows right-arrow" onClick={this.nextBtn}><i className="fa fa-angle-right"></i></div>
                  <div className="image-1" style={{
                    "backgroundImage": `url('${this.state.allImgs[this.state.currentIndex]}')`
                  }}></div>
                </div>
              </div>
              <div className="thumbnails">
                {this.allImgsLoop()}
              </div>
            </div>
         )
  }
}
