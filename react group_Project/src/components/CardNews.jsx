import React from 'react'

function CardNews({ date, title, description }) {
  return (
    <div className="group bg-gray-200 w-[80%] rounded-2xl p-8 shadow-lg 
    transition-all duration-300 hover:scale-105 cursor-pointer">

      <span className="bg-[#ffc83d] text-white px-4 py-1 rounded-full text-sm">
        {date}
      </span>

      <p className="mt-4 text-blue-900 text-xl font-semibold">
        {title}
      </p>

      {/* SHOW ON HOVER */}
      <p className="mt-4 text-gray-700 hidden group-hover:block">
        {description}
      </p>

    </div>
  )
}

export default CardNews