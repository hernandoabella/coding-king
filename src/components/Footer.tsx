import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "night";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.checked ? "night" : "default";
    setTheme(selectedTheme);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-slate-800 text-white py-4 px-6 z-50">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
    {/* Left side: copyright + link */}
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <span className="font-medium text-center sm:text-left">
        &copy; {new Date().getFullYear()} Coding King. All rights reserved.
      </span>
      <a
        href="https://www.codingking.net"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline transition duration-200"
      >
        codingking.net
      </a>
    </div>

    {/* Right side: theme toggle + social icons */}
    <div className="flex items-center gap-6">
      {/* Theme toggle */}
      <input
        title="Toggle Theme"
        type="checkbox"
        className="toggle theme-controller border-sky-400 bg-amber-300 
                   [--tglbg:theme(colors.sky.500)] 
                   checked:border-blue-800 
                   checked:bg-blue-300 
                   checked:[--tglbg:theme(colors.blue.900)]"
        checked={theme === "night"}
        onChange={handleThemeChange}
      />

      {/* Social icons */}
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
  </div>
</footer>

  );
}

export default Footer;
