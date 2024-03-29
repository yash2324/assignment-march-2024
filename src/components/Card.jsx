import React from "react";

const Card = () => {
  return (
    <div className="flex justify-center">
      <div className="relative z-20 -top-8 bg-cyan-white flex flex-col items-center w-10/12 rounded-lg py-8 shadow-2xl md:w-7/12 lg:w-6/12  ">
        <div className="flex justify-between">
          <div className="mr-auto">10K PAGEVIEWS</div>
          <div className="ml-auto">
            <span>$8.00 </span> / month
          </div>
        </div>
        <input type="range" min="0" max="100" step="20" />
      </div>
    </div>
  );
};

export default Card;
