import React from "react";

function CardNews({ date, title, description, image, onWatch }) {
  return (
    <div className="group w-[80%] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col md:flex-row">
      
      {image && (
        <div className="w-full md:w-1/2 relative">
          <img
            src={image}
            alt={title}
            className="w-[500px] h-[300px] md:h-full object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <span className="bg-[#ffc83d] text-white px-3 py-1 rounded-full text-sm">
              {date}
            </span>
          </div>
        </div>
      )}

      <div className="p-6 w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-blue-900">{title}</h2>

        <p className="mt-3 text-gray-700 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
          {description}
        </p>

        {onWatch && (
          <button
            onClick={onWatch}
            className="mt-6 w-full md:w-auto bg-red-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300"
          >
            Watch
          </button>
        )}
      </div>
    </div>
  );
}

export default CardNews;