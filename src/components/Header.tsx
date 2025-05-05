import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Header = () => {
  // Set "night" as default if no theme is saved
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "night";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    // Toggle between "night" and "default"
    const selectedTheme = e.target.checked ? "night" : "default";
    setTheme(selectedTheme);
  };

  return (
    <div className="flex flex-wrap justify-evenly items-center gap-6 p-6 sm:px-10 w-full">
      {/* Theme Toggle */}
      <div>
        <input
          title="Toggle Theme"
          type="checkbox"
          className="toggle theme-controller border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
          checked={theme === "night"}
          onChange={handleThemeChange}
        />
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        <a
          href="https://www.github.com/hernandoabella/coding_king"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href="https://www.x.com/hernandoabella/coding_king"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaXTwitter className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Header;
