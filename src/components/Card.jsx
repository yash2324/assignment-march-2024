import React, { useEffect, useState } from "react";
import check from "../assets/check.svg";
import "../card.css";
import { useDispatch, useSelector } from "react-redux";
import { AddSliderValue, AddBilling } from "../utils/dataChanges";
const Card = () => {
  const dispatch = useDispatch();
  const { sliderValue } = useSelector((state) => state.data);
  const [pageview, setPageView] = useState("100K");
  const [amount, setAmount] = useState(16);
  const { monthlyBilling } = useSelector((state) => state.data);

  useEffect(() => {
    switch (sliderValue) {
      case "0":
        setPageView("10K");
        setAmount(8);
        break;

      case "25":
        setPageView("50K");
        setAmount(12);
        break;

      case "50":
        setPageView("100K");
        setAmount(16);
        break;

      case "75":
        setPageView("500K");
        setAmount(24);
        break;

      case "100":
        setPageView("1M");
        setAmount(36);
        break;

      default:
        break;
    }
  }, [sliderValue]);

  const calculateSliderGradient = () => {
    const percentage = (sliderValue / 100) * 100;
    return `linear-gradient(to right, hsl(174, 86%, 45%) ${percentage}%, hsl(224, 65%, 95%) 0% , hsl(224, 65%, 95%) 100%)`;
  };

  const sliderGradient = calculateSliderGradient();
  return (
    <div className="flex justify-center font-display ">
      <div className="relative -top-24 bg-cyan-white dark:bg-gray-600 flex flex-col items-center w-10/12 py-8 rounded-2xl shadow-2xl md:w-7/12 lg:w-[40%]">
        <div className="w-full px-4 md:flex md:justify-between md:flex-wrap md:px-9 md:items-center">
          <div className="text-bluish-grayish dark:text-gray-300 tracking-widest mb-12 text-center md:mb-0">
            {pageview} PAGEVIEWS
          </div>

          <div className=" relative w-full mb-12 flex justify-center md:order-3 mt-10">
            <input
              type="range"
              min="0"
              max="100"
              step="25"
              value={sliderValue}
              onChange={(e) => dispatch(AddSliderValue(e.target.value))}
              className="range-slider"
              style={{ background: sliderGradient }}
            />
          </div>

          <div className="flex items-center justify-center mb-8 md:order-2 md:mb-0">
            <span className="text-4xl mr-2 font-bold text-bluish-dark dark:text-gray-100">
              {monthlyBilling
                ? `$${amount}.00`
                : `$${amount - 0.25 * amount}.00`}
            </span>
            <span className="text-sm text-bluish-grayish dark:text-gray-300">
              / month
            </span>
          </div>
        </div>
        <div className=" relative flex justify-center items-center w-full mb-10 pl-12 gap-2 sm:gap-6 ">
          <div className="text-sm text-bluish-grayish dark:text-gray-300">
            Monthly Billing
          </div>
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => dispatch(AddBilling(!monthlyBilling))}
            />
            <span className="slider round hover:bg-cyan-soft"></span>
          </label>
          <div className="text-bluish-grayish dark:text-gray-300 text-sm">
            Yearly Billing
          </div>
          <div className="bg-reddish-grayish text-reddish-light rounded-full px-1.5 py-0.5 text-sm">
            25% discount
          </div>
        </div>

        <hr className="border border-bluish-lightGrayish dark:border-gray-200  w-full" />

        <div className="flex flex-col font-semibold items-center mt-6 md:flex-row md:justify-between md:w-full md:px-9">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <img src={check} className="size-4" alt="icon-check" />
              <div className="text-bluish-grayish dark:text-gray-300 text-md">
                Unlimited Websites
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <img src={check} className="size-4" alt="icon-check" />
              <div className="text-bluish-grayish dark:text-gray-300 text-md">
                100% data ownership
              </div>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <img src={check} className="size-4" alt="icon-check" />
              <div className="text-bluish-grayish dark:text-gray-300 text-md">
                Email reports
              </div>
            </div>
          </div>
          <button className="text-bluish-lightGrayish dark:text-white dark:hover:text-gray-400 hover:text-cyan-white bg-bluish-dark px-12 py-3 rounded-full">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
