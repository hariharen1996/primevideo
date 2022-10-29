// Write your code here
import {Component} from 'react'
import MovieSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    const actionData = moviesList.filter(item => item.categoryId === 'ACTION')
    const comedyData = moviesList.filter(item => item.categoryId === 'COMEDY')
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          className="banner-img"
          alt="prime video"
        />
        <div className="prime-content">
          <h1 className="action-heading">Action Movies</h1>
          <MovieSlider data={actionData} />
          <h1 className="comedy-heading">Comedy Movies</h1>
          <MovieSlider data={comedyData} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
