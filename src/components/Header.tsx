import React, { useEffect, useState } from "react";

function Header() {
  const [selectedTheme, setSelectedTheme] = useState("default");

  useEffect(() => {
    // Check if theme preference is stored in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setSelectedTheme(storedTheme);
    }
  }, []);

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setSelectedTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="pb-5">
      <div className="flex">
        <div className="dropdown mb-5">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg
              width="12px"
              height="12px"
              className="h-2 w-2 fill-current opacity-60 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Default"
                value="default"
                checked={selectedTheme === "default"}
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Retro"
                value="retro"
                checked={selectedTheme === "retro"}
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Cyberpunk"
                value="cyberpunk"
                checked={selectedTheme === "cyberpunk"}
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Valentine"
                value="valentine"
                checked={selectedTheme === "valentine"}
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Aqua"
                value="aqua"
                checked={selectedTheme === "aqua"}
                onChange={handleThemeChange}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h1 className="font-bold">Coding-King 🤴</h1>
        <p>
          Quick resources to help you reach the highest level in just the blink
          of an eye.
        </p>
      </div>
    </header>
  );
}

export default Header;
