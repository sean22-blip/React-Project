import React from 'react'
import "../componets_CSS/Movie.css"
import oggyMovie from "../assets/oggyMovie.png"
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Episode from './Episode'
import { useNavigate } from 'react-router-dom'
function Movie() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/Episode');
  }
  function nextMovie() {
    navigate('/introduction');
  }
return (
  <div id='whole-container'>

    <div className='main-container'>
      <h1 id='movieLogo'>Movie</h1>
      <div id='tab-wrapper'>
        <div id='inner-movie'>Movie</div>
        <div id='inner-movie' onClick={nextMovie}>  More info </div>
      </div>
      <div id='box1'>
        <div id='left'>
          <img src={oggyMovie} alt="oggy" id='oggy' />
        </div>
        <div id='right'>
          <h2>"A cat and three cockroaches – a household that was never meant to be shared… Yet no matter what, they always find their way back!"</h2>
          <p>In a neat and tidy home, life should be simple and peaceful. It's a cozy house on a quiet street — exactly how <strong>Oggy</strong> likes it. But the moment he settles in for a relaxing day, <strong>Joey, Dee Dee, and Marky</strong> come crawling out of the walls with chaos on their minds and Oggy's fridge in their sights! Oggy must get rid of the cockroaches — yet no matter how many traps, brooms, or desperate schemes he comes up with, those three little pests always find a way to turn his life upside down. One smack with a flyswatter, one mistimed stumble, and the whole house becomes a disaster zone…</p>
          <p>Can a cat <em>ever</em> truly get rid of three cockroaches? A timeless story about the never-ending battle between a loveable blue cat and the mischievous little bugs who always stay one step ahead.</p>
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