import React from 'react'
import "../componets_CSS/Movie.css"
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { movieList, availableList, comingSoon } from './moviedata'
function Movie() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/Episode')
  }

  function nextMovie() {
    navigate('/introduction')
  }

  return (
    <div id='whole-container'>

      <div className='main-container'>
        <h1 id='movieLogo'>Movie</h1>
        <div id='tab-wrapper'>
          <div id='inner-movie'>Movie</div>
          <div id='inner-movie' onClick={nextMovie}>More info</div>
        </div>

        {movieList.map((movie) => (
          <div id='box1' key={movie.id}>
            <div id='left'>
              <img src={movie.image} alt={movie.alt} id='oggy' />
            </div>
            <div id='right'>
              <h2>"{movie.heading}"</h2>
              <p>{movie.description1}</p>
              <p><em>{movie.description2}</em></p>
              <button id='watchBtn' onClick={handleClick}>Watch it Here →</button>
            </div>
          </div>
        ))}
      </div>

      <div id='btm'>
        <h4>Website Terms of Use</h4>
        <div id='footer'>
          <FaYoutube />
          <FaTiktok />
          <FaInstagram />
          <FaFacebook />
          <FaXTwitter />
          <span id='divider'>|</span>
          <FaInstagram />
          <FaXTwitter />
          <span>for Cambodian</span>
        </div>
        <h5>@Sony Music Labels Inc.</h5>
      </div>

    </div>
  )
}

export default Movie
