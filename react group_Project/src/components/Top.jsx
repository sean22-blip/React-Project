// import React from 'react'
import Header from './Header';
import Episode from './Episode'
import './../componets_CSS/Top.css'
import logo from '../assets/logo.svg'
import pink from '../assets/pink.jpg'
import oggy from '../assets/oggy1.png'
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import bob from '../assets/bob.avif'
import tom from '../assets/tom.png'
import simp from '../assets/simp.png'

// import newVd from '../assets/new-vd.svg'
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
                  <div className='sub font-medium'>WELCOME TO KIDDIZ</div>
                  <div className='heading font-sans'>Endless hilarious comedy, unexpected surprises & edge-of-your-seat action of the best in animation</div>
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
        <div className='p-vd p-section is-scroll-active'>
          <div className='p-vd__inner'>
            <div className='p-vd__title c-title'>
              <h2 id='movieLogo'>
                New Video
              </h2>
            </div>
            <div className='vd-bob'>
              <a href="https://www.youtube.com/watch?v=5LhDo-S2WYg&pp=ygUoc3BvbmdlYm9iIHNxdWFyZXBhbnRzIHRpdGFucyBvZiB0aGUgdGlkZQ%3D%3D">
              <img src={bob} alt="" /></a>
            </div>
            <div className='prev-btn' >
                <a href=''>Previous Episodes</a>
            </div>
          </div>
          <div className='vd-deco '>
            <div className='vd-deco-bg'>
            <div className='vd-deco-char'>
              <img src={tom}alt="" />
              {/* <img src={jerry} alt="" /> */}
            </div>
            </div>
          </div>
        </div>
        <div className='intro '>
          <div className='intro-inner '>
          <h2 id='movieLogo'>Introduction</h2>         
          <div className=' justify-center text-center text-lg w-[90vh]   m-[50px] m-auto  rounded-2xl  border-2 shadow-2xl  p-[15px] text-white'>
            <div className='mt-4 '>
              <h2>In a world full of laughter 
                and fun… the craziest cartoons come together!</h2>
                <h2 className='mt-10'>[ FUN + KIDS = Kiddiz ]</h2>
                <div className='mt-10'>
                <h2 className='mb-2'>Tom and Jerry – nonstop chase and clever tricks</h2>
                <h2 className='mb-2'>Oggy and the Cockroaches – silly chaos and endless mischief</h2>
                <h2 className='mb-2'>The Pink Panther Show – smooth, funny, and full of surprises</h2>
                <h2 className='mb-2'>SpongeBob SquarePants – bubbly fun from the deep blue sea</h2>
                <h2>The Simpsons – wild family laughs and crazy moments</h2>
                </div>
            </div>
            <h2 className='mt-[40px]'>Different styles. Different laughs. One amazing world.</h2>
            <img src={simp} alt="" className='   object-cover  p-3 justify-center' />
            
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

        
      </main >
    </>
  );
}

export default Top
