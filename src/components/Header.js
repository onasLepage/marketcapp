import React from "react";
import DarkModeIcon from "./DarkModeIcon";

const Header = ({ name, symbol }) => {
  return (
    <>
      <div className="flex items-end">
        <h1 className="text-5xl">{name}</h1>
        <span className="text-neutral-400 text-lg xl:text-xl 2xl:text-2xl px-4">
          {symbol}
        </span>
      </div>
      <DarkModeIcon />
    </>
  );
};

export default Header;
