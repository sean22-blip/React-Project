// import React from 'react'
import Header from './Header';
import './../componets_CSS/Top.css'
import logo from '../assets/logo.svg'
import pink from '../assets/pink.jpg'
import oggy from '../assets/oggy1.png'
import bug from '../assets/bug.png'

function Top() {
  return (
    <>
      <main>
        {/* <div className='image'>
          <img src="https://static-media.fox.com/fmc/prod/fts/artwork/VX-15115006/e5gbs24shff0agug.jpg" alt="" />
        </div> */}
        <div className='container'>
          <div className='slide_wrapper'>
            <div className='slider'>
              <div className='slide'>
                <div>
                  <img src={pink} alt="" className='pink' />
                </div>
                <div className='sub_heading'>
                  <div className='sub'>WELCOME TO KIDDIZ</div>
                  <div className='heading'>Endless hilarious comedy, unexpected surprises & edge-of-your-seat action of the best in animation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mid'>
          <div className='mid-container'>
            <div className='mid-wrapper'>
              <div className='mid-img-area'>
                <img src={oggy} alt="" />
              </div>
              <div className='mid-content-area'>
                <h1><img src={logo} alt="" /></h1>
                <div className='mid-description'>
                  <p>
                    Kiddiz is the funny and unexpected 
                    brand that stands out from the pack in a way 
                    in which kids can relate. Our cartoon-crammed 
                    network delivers hilarious comedy, unexpected 
                    surprises and edge-of-your-seat action through
                    the best in animated series and hit blockbuster
                    movies. Kiddiz is where anything is possible,
                    where fun and adventure lives–all day, every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banner_section'>
          <div className='banner_container'>
            <div className='banner_wrapper'>
              <div className='banner'>
                <div className='banner_img'></div>
                <div className='banner_decs'></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='p-news p-section is-scroll-active' data-scroll-effect>
          <div className='p-news__inner'>
            <div className='p-news__header'>

              <div className='p-news__header-title'>
                <div className='p-news__header-title-item'></div>
                <div className='p-news__header-nav'>
                  <div className='p-news__header-nav-item --global ' >

                  </div>
                </div>

              </div>
            </div>
            <div className='p-news__contents'>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div> */}
      </main>
<<<<<<< HEAD
      
=======

>>>>>>> b49128f604470198b5ecd8e08b0de44c678b45c2
    </>
  );
}

export default Top
