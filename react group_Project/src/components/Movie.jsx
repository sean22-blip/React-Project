import React from 'react'
import "../componets_CSS/Movie.css"
import ben10 from "../assets/ben10.png"
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Movie() {
  return (
    <div id='whole-container'>

      <div className='main-container'>
        <h1 id='movieLogo'>Movie</h1>
        <div id='tab-wrapper'>
          <div id='inner-movie'>Movie</div>
        </div>
        <div id='box1'>
          <div id='left'>
            <img src={ben10} alt="ben10" id='ben10' />
          </div>
          <div id='right'>
            <h2>"Humans & Monsters – two beings that are never meant to meet… Yet a strong bond forms between the two!"</h2>
            <p>At a sunny playground, the laughter of kids fill the air. It's a typical elementary school in an ordinary town. But when night falls and there is no one around, these little monsters come out of their hiding, to spend their typical school lives! These monsters must never be discovered by humans. Yet one day, Cula the Dracula incidentally discovers a phone, Leading to an encounter with the curious human girl Hana…</p>
            <p>Can a human girl and monsters become friends? A touching story about friendship between humans and monsters that was never meant to be.</p>
            <button id='watchBtn'>Watch it Here →</button>
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