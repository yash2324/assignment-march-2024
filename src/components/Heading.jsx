import React from "react";
import bg from "../assets/bg.svg";
import circles from "../assets/circlesPattern.svg";
import DarkMode from "./DarkMode";
const Heading = () => {
  return (
    <>
      <DarkMode />
      <div className="text-center ">
        <div className="header relative flex flex-col items-center h-96 mb-6 ">
          <img
            src={bg}
            className="absolute min-h-[100%] md:min-h-auto min-w-[100%]"
          />
          <img
            src={circles}
            alt="pattern-circles"
            className="absolute top-16 w-[30%] md:w-[15%]"
          />

          <h2 className="font-display z-10 pt-32 md:pt-28 text-bluish-dark mb-4 font-extrabold text-[40px]">
            Simple, traffic-based pricing
          </h2>
          <div className="text-bluish-grayish font-semibold z-10 mb-1 text-center md:w-full">
            Sign-up for our 30-day trial. No credit card required.
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
