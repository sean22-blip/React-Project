// import React from 'react'
import Header from './Header';
import './../componets_CSS/Top.css'

import pink from '../assets/pink.jpg'


function Top() {
  return (
    <>
      <main>
          <div className='image'>
            <img src="https://static-media.fox.com/fmc/prod/fts/artwork/VX-15115006/e5gbs24shff0agug.jpg" alt="" />
          </div>
        <div className='container'>
          <div>
            <img src={pink} alt="" className='pink'/>
          </div>
          <div className='sub_heading'>
            <div className='sub'>WELCOME TO KIDDIZ</div>
            <div className='heading'>Endless hilarious comedy, unexpected surprises & edge-of-your-seat action of the best in animation</div>
          </div>
        </div>
        <div className='p-news p-section is-scroll-active' data-scroll-effect>
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

        </div>
      </main>
      
    </>
  );
}

export default Top
