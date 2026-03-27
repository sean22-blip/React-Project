import React from 'react';
import { useState } from 'react';
import {movie} from "./episode_data";
import "../componets_CSS/Episode.css"
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


 function Episode(){
  const movieName = Object.keys(movie);
  const [selectedMovie, setSelectedMovie] = useState(movieName[0]);
  const [selectdSeason, setSeletedSeason] = useState(Object.keys(movie[movieName[0]])[0]);
  const handleMovieClick = (name) =>{
    setSelectedMovie(name);
    setSeletedSeason(Object.keys(movie[name])[0]);
  }

  return(
    <>
      <div className="episode-page">
      <h1 id ='movieLogo'>EPISODE</h1>
      <div className="category-bar">
        {movieName.map((name) => (
          <button
          key={name} onClick={()=> handleMovieClick(name)} className={selectedMovie === name ? "active" : ""}
          >{name}
          </button>
       ))}
        </div>
        <div className="season-bar">
          {Object.keys(movie[selectedMovie]).map((season) => (
            <button key={season} onClick={() => setSeletedSeason(season)} className={selectdSeason === season ? "active" : ""}>{season}</button>
          ))}
        </div>
        <div className="episode-container">
       <div className="episode-grid">
        {movie[selectedMovie][selectdSeason].map((ep) => (
          <div className="episode-card" key={ep.id}>
            <img src={ep.img} alt={ep.title} />
            <p>{ep.title}</p>
          </div>
        ))}
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
</>
  );
  
}


export default Episode;