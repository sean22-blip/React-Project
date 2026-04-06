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

      {/* Conclusion Section */}
      <div id='conclusion'>
        <p id='conclusion-text'>
          From the mischievous cockroaches in <strong>Oggy's</strong> house to the endless
          chases of <strong>Tom &amp; Jerry</strong>, the underwater laughs of <strong>SpongeBob</strong>,
          the iconic family of <strong>The Simpsons</strong>, and the cool mystery of{' '}
          <strong>The Pink Panther</strong> — we've brought your favorite cartoons together
          in one place. Whether you're here for the movies or the episodes, the fun never stops.
        </p>
        <p id='tagline'>"The adventure never ends — there's always another episode waiting."</p>

        <div id='available-section'>
          <h3>Now Available</h3>
          <div id='available-grid'>
            {availableList.map((item) => (
              <div className='available-card' key={item.id}>
                <span className='card-title'>{item.title}</span>
                <span className='card-sub'>Episodes &amp; Movie</span>
              </div>
            ))}
          </div>
        </div>

        <div id='coming-soon-section'>
          <h3>Coming Soon</h3>
          <div id='coming-soon-grid'>
            {comingSoon.map((item) => (
              <div className='coming-card' key={item.id}>
                <span className='card-title'>{item.title}</span>
                <span className='coming-badge'>Coming Soon</span>
              </div>
            ))}
          </div>
        </div>

        <p id='conclusion-note'>Stay tuned — new cartoons added regularly. © Cartoon World · For Cambodian fans</p>
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
