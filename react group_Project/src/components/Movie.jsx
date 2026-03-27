import React from 'react'
import "../componets_CSS/Movie.css"
import oggyMovie from "../assets/oggyMovie.png"
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Movie() {
  function handleClick() {
    window.open("https://www.youtube.com/watch?v=eTSVEnCHDeY&list=PL-d4D7FQaDKMKmZD-nmHpdnbO7YZRipC6")
  }
  return (
    <div id='whole-container'>

      <div className='main-container'>
        <h1 id='movieLogo'>Movie</h1>
        <div id='tab-wrapper'>
          <div id='inner-movie'>Movie</div>
        </div>
        <div id='box1'>
          <div id='left'>
            <img src={oggyMovie} alt="oggy" id='oggy' />
          </div>
          <div id='right'>
            <h2>"A cat and a mouse – two enemies that were never meant to live under the same roof… Yet fate keeps bringing them back together!"</h2>
            <p>In a warm and cozy household, life seems perfectly normal. It's a typical home on a typical street. But the moment Tom settles in for a peaceful day, Jerry comes scurrying out of his little mouse hole with a grin on his face and mischief on his mind! Tom must catch Jerry — yet no matter how many traps, chases, or schemes Tom cooks up, that tiny mouse always finds a way to outsmart him. One pan to the face, one mistimed leap, and the whole house turns into a battlefield…</p>
            <p>Can a cat ever truly catch a mouse? A timeless story about the never-ending chase between a cunning cat and the clever little mouse who always stays one step ahead.</p>
            <button id='watchBtn' onClick={handleClick}>Watch it Here →</button>
          </div>
        </div>
      </div>

      <div id='btm'>
        <h4>Website Terms of Use</h4>
        <div id='footer'>
          <FaYoutube />
          <FaTiktok />
          <FaInstagram />
          <FaXTwitter />
          <FaFacebook />
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