import React from 'react'

function News() {
  return (
    <div className="w-full">

      {/* TOP HEADER */}
      <div className="bg-[#02a6d6] py-20 text-center text-white relative">
        <h1 className="text-6xl font-bold  drop-shadow-lg pt-4">
          News
        </h1>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button className="bg-black px-16 py-4 rounded-full text-white text-xl border border-solid-2 ">
            Search
          </button>

          <button className="bg-black px-16 py-4 rounded-full text-white text-xl border border-solid-2">
            See More
          </button>
        </div>
      </div>

      {/* NEWS SECTION */}
      <div className="bg-[#02a6d6] py-16 flex flex-col items-center gap-8">

        {/* CARD 1 */}
        <div className="bg-gray-200 w-[80%] rounded-2xl p-8 shadow-lg">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
            26.03.20
          </span>

          <p className="mt-4 text-blue-900 text-xl font-semibold">
            Episode 8 of "Spookiz - Monsters Awakening-" has been released!
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-gray-200 w-[80%] rounded-2xl p-8 shadow-lg">
          <span className="bg-yellow-400 text-white px-4 py-1 rounded-full text-sm">
            26.03.16
          </span>

          <p className="mt-4 text-blue-900 text-xl font-semibold">
            [JAPAN] Spookiz to appear at urban music festival 'CENTRAL'!
          </p>
        </div>

      </div>

    </div>
  )
}

export default News