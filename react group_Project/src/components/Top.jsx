// import React from 'react'
import Header from './Header';
import './../componets_CSS/Top.css'
import vd from './../assets/0308.mp4'
import vd1 from './../assets/spongebob.mp4'
import logo from './../assets/logo.svg'
import global from './../assets/global.png'
import loc from './../assets/loc.png'
import News from './News';


function Top() {
  return (
    <>
      <main>
        <div>
          <Header />
          <div className='vd-container'>
            <div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className='bg-vd'
                src={vd}>
              </video>
            </div>

            <div className='bg-img'>
              <img src={logo} alt="" />
            </div>
            <div>
              <div className='new-vd'>
                <div className='yt-title'>New Video</div>
                <div className='yt-vd'>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={vd1} alt=""
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p-news p-section is-scroll-active' data-scroll-effect>
          <div className='p-news__inner'>
            <div className='p-news__header'>
              
                <div className='p-news__header-title'>
                  <div className='p-news__header-title-item'></div>
                  <div className='p-news__header-nav'>
                    <div className='p-news__header-nav-item --global ' >
                      {/* <a href="" className='p-news__header-nav-item-link'>
                        <div className='p-in-text --icon'>
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="80px" height="23px"> <text kerning="auto" font-family="Myriad Pro" 
                          fill="rgb(0, 0, 0)" font-size="36px" x="0px" y="23px"><tspan font-size="36px" font-family="Calibri" 
                          font-weight="bold" fill="#1d8aff">News</tspan></text> </svg>
                        </div>
                      </a> */}
                    </div>
                  </div>
                  {/* <div className='p-news__header-nav-item --global_all'>
                    <div className='p-in-text --icon'>
                          <img src={global} alt="" className='global'/>
                    </div>
                  </div>
                  <div className='p-news__header-nav-item --jp'>
                            <a href={News} className='p-news__header-nav-item-link'></a>
                            <div className='p-in-icon'></div>
                  </div>
                  <div className='p-news__header-nav-item --jp_all'>
                            <a href={News} className='p-news__header-nav-item-link'></a>
                            <div className='p-in-text --icon'>
                              <img src= {loc} alt="" className='loc'/>
                            </div>
                  </div> */}
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
