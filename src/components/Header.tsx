import React, { useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa";

function Header() {
  const [selectedTheme, setSelectedTheme] = useState("light");

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

  const [text, setText] = useState("");
  const targetText = "Coding King"; // The target text you want to reveal
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Random characters

  useEffect(() => {
    let i = 0; // Use a counter to keep track of the letter position

    const intervalId = setInterval(() => {
      if (i < targetText.length) {
        // Generate the current state of text
        const randomText = targetText
          .split("")
          .map((_, index) => {
            if (index < i) {
              return targetText[index]; // Keep already revealed letters
            } else {
              return chars.charAt(Math.floor(Math.random() * chars.length)); // Generate random letters
            }
          })
          .join("");

        setText(randomText); // Update the text with random letters

        // Reveal the correct letter after a delay
        setTimeout(() => {
          setText((prev) => {
            const currentText = prev.split("");
            currentText[i] = targetText[i]; // Replace with the correct letter
            return currentText.join("");
          });
        }, 1000); // Delay for 1 second for each letter

        i++; // Move to the next letter
      } else {
        setText(targetText); // Set the final text to "Coding King"
        clearInterval(intervalId); // Stop the interval when complete
      }
    }, 200); // Change every 200 milliseconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <header className="w-full border-b-4 shadow-sm">
      <div className="m-5 w-full flex item-center justify-between">
        <div className="dropdown mb-5">
          <div tabIndex={0} role="button" className="btn btn-outline">
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
                aria-label="Light"
                value="light"
                checked={selectedTheme === "light"}
                onChange={handleThemeChange}
              />
            </li>

            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Bumblebee"
                value="bumblebee"
                checked={selectedTheme === "bumblebee"}
                onChange={handleThemeChange}
              />
            </li>

            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Synthwave"
                value="synthwave"
                checked={selectedTheme === "synthwave"}
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
                aria-label="Forest"
                value="forest"
                checked={selectedTheme === "forest"}
                onChange={handleThemeChange}
              />
            </li>

            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Lofi"
                value="lofi"
                checked={selectedTheme === "lofi"}
                onChange={handleThemeChange}
              />
            </li>

            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Luxury"
                value="luxury"
                checked={selectedTheme === "luxury"}
                onChange={handleThemeChange}
              />
            </li>

            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Night"
                value="night"
                checked={selectedTheme === "night"}
                onChange={handleThemeChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Coffee"
                value="coffee"
                checked={selectedTheme === "coffee"}
                onChange={handleThemeChange}
              />
            </li>
          </ul>
        </div>

        <div className="pt-5 justify-center flex gap-5 md:mr-10">
          <div>
            <a
              rel="noopener"
              href="https://github.com/hernandoabella/coding-king"
              aria-label="github project"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" />
              </svg>
            </a>
          </div>
          <div>
            <a
              rel="noopener"
              href="https://x.com/codingkingx/"
              aria-label="x (twitter)"
              target="_blank"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-5">
        <div className="flex items-center text-3xl md:text-5xl font-bold mx-auto justify-center">
          &#123;
          <FaCrown className="text-yellow-500" />
          &#125;{" "}
          <span className="matrix-effect ml-2" data-text="Coding King">
            {text}
          </span>
        </div>

        <p className="mt-5">
          Quick <b>coding resources</b> to open the next level.
        </p>
      </div>
    </header>
  );
}

export default Header;
