import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Hero() {
    const [theme, setTheme] = useState("default");

    // Retrieve theme from localStorage on component mount
    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
        document.body.setAttribute("data-theme", savedTheme); // Apply saved theme
      }
    }, []);
  
    const handleThemeChange = (e) => {
      const selectedTheme = e.target.checked ? "synthwave" : "default";
      setTheme(selectedTheme);
      localStorage.setItem("theme", selectedTheme); // Save theme to localStorage
      document.body.setAttribute("data-theme", selectedTheme); // Apply theme
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
        <div className="flex justify-center items-center gap-10">

<div className="absolute 10px left-10 hidden md:block">
      <input
        type="checkbox"
        className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
        checked={theme === "synthwave"}
        onChange={handleThemeChange}
      />
    </div>

            <div className="text-center mt-10">
                <div className="flex items-center text-3xl md:text-5xl font-bold mx-auto justify-center">
                    &#123;👑&#125;{" "}
                    <span className="matrix-effect ml-2" data-text="Coding King">
                        {text}
                    </span>
                </div>

                <p className="mt-5 text-2xl">
                    Quick resources for developers
                </p>
            </div>

            <div className="gap-4 absolute right-10 hidden md:flex">
                <a href="https://www.github.com/hernandoabella/coding_king" target="_blank"><FaGithub className="h-6 w-6" /></a>
                <a href="https://www.x.com/hernandoabella/coding_king" target="_blank"><FaXTwitter className="h-6 w-6" /></a>
            </div>
        </div>
    );
}

export default Hero;
