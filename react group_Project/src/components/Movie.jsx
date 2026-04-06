import React from 'react'
import "../componets_CSS/Movie.css"
import oggyMovie from "../assets/oggyMovie.png"
import tj from "../assets/tj.png"
import spongebb from "../assets/spongebb.png"
import simpsonmovie from "../assets/simpsonmovie.png"
import ppmovie from "../assets/ppmovie.png"
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
        <div id='box1'>
          <div id='left'>
            <img src={tj} alt="oggy" id='oggy' />
          </div>
          <div id='right'>
            <h2>"A cat and a mouse – a rivalry that was never meant to end… Yet no matter what, they always find their way back!"</h2>
            <p>In a neat and tidy home, life should be simple and peaceful. It's a cozy house on a quiet street — exactly how <strong>Tom</strong> likes it. But the moment he settles in for a relaxing day, <strong>Jerry</strong> comes scurrying out of his mouse hole with mischief on his mind and Tom's patience on the line! Tom must catch the mouse — yet no matter how many traps, brooms, or desperate schemes he comes up with, that one little pest always finds a way to turn his life upside down. One swing of a frying pan, one mistimed stumble, and the whole house becomes a disaster zone…</p>
            <p>Can a cat <em>ever</em> truly catch one mouse? A timeless story about the never-ending battle between a loveable house cat and the clever little mouse who always stays one step ahead.</p>
            <button id='watchBtn' onClick={handleClick}>Watch it Here →</button>
          </div>
        </div>
        <div id='box1'>
          <div id='left'>
            <img src={spongebb} alt="oggy" id='oggy' />
          </div>
          <div id='right'>
            <h2>"A sponge and his friends – a life under the sea that was never meant to be ordinary… Yet no matter what, the fun never stops!"</h2>
            <p>In the colorful and bustling city of <strong>Bikini Bottom</strong>, life should be simple and carefree. It's a pineapple house on a quiet seafloor — exactly how <strong>SpongeBob SquarePants</strong> likes it. But the moment he ties his square pants and heads to the <strong>Krusty Krab</strong>, chaos is never far behind! Whether it's his grumpy neighbor <strong>Squidward</strong>, his dim-witted best friend <strong>Patrick</strong>, or the scheming <strong>Plankton</strong> trying to steal the secret Krabby Patty formula — SpongeBob must navigate the wildest, silliest adventures the ocean has to offer. One jellyfishing trip, one mistimed spatula flip, and the whole town becomes a disaster zone…</p>
            <p>Can a fry cook <em>ever</em> truly have a normal day in Bikini Bottom? A timeless story about the never-ending adventures of the world's most optimistic sponge and the unforgettable friends who make every moment anything but boring.</p>
            <button id='watchBtn' onClick={handleClick}>Watch it Here →</button>
          </div>
        </div>
        <div id='box1'>
          <div id='left'>
            <img src={simpsonmovie} alt="oggy" id='oggy' />
          </div>
          <div id='right'>
            <h2>"A man, his family, and a town that was never meant to make sense… Yet no matter what, they always find their way back to each other!"</h2>
            <p>In the perfectly imperfect town of <strong>Springfield</strong>, life should be simple and predictable. It's a two-story house on Evergreen Terrace — exactly how <strong>Homer J. Simpson</strong> likes it, as long as there's a couch, a TV, and a cold <strong>Duff Beer</strong> within reach. But the moment he settles in for a lazy afternoon, chaos is never far behind! Whether it's his mischievous son <strong>Bart</strong> pulling another prank, his brainy daughter <strong>Lisa</strong> challenging everything he knows, his patient wife <strong>Marge</strong> holding the family together by a thread, or his boss <strong>Mr. Burns</strong> making life at the <strong>Springfield Nuclear Power Plant</strong> a daily nightmare — Homer must stumble through it all with a donut in hand. One "D'oh!", one ill-fated scheme, and the whole town becomes a disaster zone…</p>
            <p>Can a nuclear safety inspector <em>ever</em> truly have a quiet life in Springfield? A timeless story about the never-ending misadventures of America's most loveable oaf and the extraordinary family that somehow makes it all work.</p>
            <button id='watchBtn' onClick={handleClick}>Watch it Here →</button>
          </div>
        </div>
        <div id='box1'>
          <div id='left'>
            <img src={ppmovie} alt="oggy" id='oggy' />
          </div>
          <div id='right'>
            <h2>"A pink panther and a bumbling inspector – a rivalry that was never meant to be solved… Yet no matter what, the mystery always continues!"</h2>
            <p>In the elegant and sophisticated streets of <strong>Paris</strong>, life should be calm and refined. It's a glamorous city of lights — exactly the kind of place where <strong>The Pink Panther</strong> glides through with effortless cool and a sly smile. But the moment he slinks around the next corner, the relentless and hopelessly incompetent <strong>Inspector Clouseau</strong> is never far behind! Whether it's a botched investigation, a mistaken identity, or yet another priceless <strong>Pink Panther diamond</strong> gone missing — Clouseau must crack the case, yet every scheme, disguise, and dramatic deduction only leads to more spectacular failure. One misplaced magnifying glass, one catastrophic stumble, and the whole city of Paris becomes a disaster zone…</p>
            <p>Can an inspector <em>ever</em> truly outsmart the most elusive panther in the world? A timeless story about the never-ending cat-and-mouse game between a coolly mysterious pink cat and the world's most confidently clueless detective.</p>
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
    </div >
  )
}

export default Movie