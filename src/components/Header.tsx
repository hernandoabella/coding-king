import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Header = () => {
  // Set dark mode ("synthwave") as default if no theme is saved
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "synthwave"; // Default to "synthwave" (dark mode)
  });

  useEffect(() => {
    // Apply the saved theme to the body
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Save theme preference to localStorage
  }, [theme]); // Re-run when theme changes

  const handleThemeChange = (e) => {
    // Toggle between "synthwave" (dark) and "default" (light)
    const selectedTheme = e.target.checked ? "synthwave" : "default";
    setTheme(selectedTheme);
  };

  return (
    <div className="flex flex-wrap justify-between items-center gap-6 p-6 sm:px-10 w-full">
      {/* Theme Toggle (always visible now) */}
      <div>
        <input
          title="Toggle Theme"
          type="checkbox"
          className="toggle theme-controller border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
          checked={theme === "synthwave"}
          onChange={handleThemeChange}
        />
      </div>

      {/* Social Icons (always visible now) */}
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
