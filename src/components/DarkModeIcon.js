import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const DarkModeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg transition duration-300 hover:scale-125 ${darkMode ? "shadow-gray-800" : null
        }`}
    >
      {darkMode ? <MoonIcon
        className="h-8 w-8 cursor-pointer stroke-1 fill-yellow-400 stroke-yellow-400"

      /> :
        <SunIcon
          className="h-8 w-8 cursor-pointer stroke-1 fill-none stroke-neutral-400"
        />}
    </button>
  );
};

export default DarkModeIcon;
