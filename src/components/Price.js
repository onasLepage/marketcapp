import React from "react";

const Overview = ({ price, change, changePercent, currency }) => {
  return (
    <div className="w-full h-full flex items-end justify-around my-1">
      <span className="font-bold text-3xl 2xl:text-3xl flex items-end">
        ${price}
        <span className="text-lg xl:text-xl 2xl:text-lg text-neutral-400 items-end mx-2">
          {currency}
        </span>
      </span>
      <span
        className={`text-lg xl:text-xl 2xl:text-2xl ${change > 0 ? "text-lime-500" : "text-red-500"
          }`}
      >
        {change} <span>({changePercent}%)</span>
      </span>
    </div>
  );
};

export default Overview;
