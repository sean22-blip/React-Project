import React, { useState } from 'react'
import CardNews from './CardNews'
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


function News() {
  const [showMore, setShowMore] = useState(false)
 

  return (
    <div className="w-full">

   
      <div className="bg-[#1e4a87] py-20 text-center text-[#ffc83d]">
        <h1 className="text-8xl font-bold drop-shadow-lg">News</h1>

        <div className="flex justify-center gap-6 mt-10">
          <button className="bg-black px-16 py-4 rounded-full text-white text-xl">
            Search
          </button>

          <button
            className="bg-black px-16 py-4 rounded-full text-white text-xl"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'See More'}
          </button>
        </div>
      </div>

    
      <div className="bg-[#1e4a87] py-16 flex flex-col items-center gap-8">
        <CardNews
          date="26.03.20"
          title='Episode 8 of "oggy" has been released!'
          description="Enjoy the latest episode featuring fun adventures and hilarious moments with Oggy and his friends."
          onWatch={() =>
            window.open("https://www.youtube.com/watch?v=eTSVEnCHDeY&list=PL-d4D7FQaDKMKmZD-nmHpdnbO7YZRipC6")
          }
        />
            

        <CardNews
          date="26.03.16"
          title="Tom and Jery has been released!"
          description="Enjoy the latest episode featuring fun adventures and hilarious moments with Oggy and his friends."
          onWatch={() =>
            window.open("https://www.youtube.com/watch?t=16&v=yop3Ts3bK8o")
          }
        />

        <CardNews
          date="26.03.16"
          title="Pink panther "
          description="Enjoy the latest episode featuring fun adventures and hilarious moments with Oggy and his friends."
          onWatch={() =>
            window.open("https://www.youtube.com/watch?t=8&v=zlCq-e05vVg")
          }
        />


        <CardNews
          date="26.03.16"
          title="sprong bob "
          description="Enjoy the latest episode featuring fun adventures and hilarious moments with Oggy and his friends."
          onWatch={() =>
            window.open("hhttps://www.youtube.com/watch?t=5&v=Is46HmWWhXo")
          }
        />


      
        {showMore && (
          <>
            <CardNews
              date="26.03.15"
              title="New sprong bob available!"
              description="Enjoy the latest episode featuring fun adventures and hilarious moments with Oggy and his friends."
            />

            <CardNews
              date="26.03.10"
              title="New sprong bob released!"
              description="Enjoy the latest episode featuring fun adventures and hilarious moments with Oggy and his friends."
            />
          </>
        )}

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

export default News