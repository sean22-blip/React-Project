import React, { useState } from "react"
import CardNews from "./CardNews"
import { newsData } from "./news"
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

function News() {
  const [showMore, setShowMore] = useState(false);

  
  const newsToShow = showMore ? newsData.slice(0, 6) : newsData.slice(0, 4);

  return (
    <div className="w-full mt-4">
    
      <div className="bg-[#1e4a87] py-20 text-center text-[#ffc83d]">
        <h1 id="movieLogo">News</h1>
        <div className="flex justify-center gap-6 mt-10">
          <button className="cursor-pointer bg-black px-16 py-4 rounded-full text-white text-xl">
            Search
          </button>
          <button
            className="cursor-pointer bg-black px-16 py-4 rounded-full text-white text-xl"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "See More"}
          </button>
        </div>
      </div>

  
      <div className="bg-[#1e4a87] py-16 flex flex-col items-center gap-8">
        {newsToShow.map((news) => (
          <CardNews
            key={news.id} 
            date={news.date}
            title={news.title}
            description={news.description}
            image={news.image}
            onWatch={news.onWatch}
          />
        ))}
      </div>

   
      <div id="btm" className="mt-10 text-center text-white">
        <h4>Website Terms of Use</h4>
        <div id="footer" className="flex justify-center gap-4 items-center mt-2">
          <FaYoutube />
          <FaTiktok />
          <FaInstagram />
          <FaXTwitter />
          <FaFacebook />
          <span id="divider">|</span>
          <FaInstagram />
          <FaXTwitter />
          <span>for Cambodian</span>
        </div>
        <h5>@Sony Music Labels Inc.</h5>
      </div>
    </div>
  );
}

export default News;