// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

class MovieItem extends Component {
  render() {
    const {item} = this.props
    const {thumbnailUrl, videoUrl} = item
    console.log(thumbnailUrl, videoUrl)
    return (
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumb-img" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal">
            <button
              type="button"
              // eslint-disable-next-line react/no-unknown-property
              testId="closeButton"
              className="close-btn"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    )
  }
}

export default MovieItem
