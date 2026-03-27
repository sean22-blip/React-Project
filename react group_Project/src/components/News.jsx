import React, { useState } from 'react'
import CardNews from './CardNews'

function News() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="bg-[#1e4a87] py-20 text-center text-[#ffc83d]">
        <h1 className="text-8xl font-bold drop-shadow-lg">News</h1>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6 mt-10">
          <button className="bg-black px-16 py-4 rounded-full text-white text-xl">
            Search
          </button>

          {/* CLICK BUTTON */}
          <button
            className="bg-black px-16 py-4 rounded-full text-white text-xl"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'See More'}
          </button>
        </div>
      </div>

      {/* NEWS SECTION */}
      <div className="bg-[#1e4a87] py-16 flex flex-col items-center gap-8">

        {/* ALWAYS SHOW */}
        <CardNews
          date="26.03.20"
          title='Episode 8 of "Spookiz - Monsters Awakening-" has been released!'
          description="News Episode"
        />

        <CardNews
          date="26.03.16"
          title="[JAPAN] Spookiz to appear at CENTRAL festival!"
          description="News Episode"
        />

        <CardNews
          date="26.03.16"
          title="[JAPAN] Spookiz to appear at CENTRAL festival!"
          description="News Episode"
        />


        <CardNews
          date="26.03.16"
          title="[JAPAN] Spookiz to appear at CENTRAL festival!"
          description="News Episode"
        />


        {/* SHOW MORE */}
        {showMore && (
          <>
            <CardNews
              date="26.03.15"
              title="New merchandise available!"
              description="News Episode"
            />

            <CardNews
              date="26.03.10"
              title="New animation teaser released!"
              description="News Episode"
            />
          </>
        )}

      </div>

      {/* <div id='btm'>
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
        </div> */}


    </div>
  )
}

export default News