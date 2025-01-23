import React, { useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa";

function Hero() {
  
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
    <div className="w-full ">
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
          Quick resources for developers
        </p>
      </div>
    </div>
  );
}

export default Hero;
