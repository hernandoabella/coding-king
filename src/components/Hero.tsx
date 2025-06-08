"use client";

import React, { useEffect, useState, useRef } from "react";

function Hero() {
  const [textElements, setTextElements] = useState<React.ReactNode[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const targetTexts = ["</Coding King>", "undefined", "We never give up!", "CRASH"];
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?";
  const colors = ["#f87171", "#60a5fa", "#a78bfa", "#34d399", "#fbbf24", "#f472b6", "#38bdf8"];

  const getRandomChar = () => chars.charAt(Math.floor(Math.random() * chars.length));
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  // Function to create the displayed array of spans given a string and optional highlighted indexes
  const createTextSpans = (text: string, highlightIndex: number | null = null) => {
    return text.split("").map((char, index) => {
      if (highlightIndex !== null && index === highlightIndex) {
        const color = getRandomColor();
        return (
          <span
            key={index}
            className="font-mono transition-all inline-block"
            style={{
              color,
              textShadow: `0 0 6px ${color}`,
              transform: "rotateX(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            {char}
          </span>
        );
      }
      return (
        <span
          key={index}
          className="transition-all"
          style={{ opacity: 1 }}
        >
          {char}
        </span>
      );
    });
  };

  const animateMorph = (fromText: string, toText: string, callback: () => void) => {
    let i = 0;
    const maxLen = Math.max(fromText.length, toText.length);
    let displayedChars = fromText.padEnd(maxLen, " ").split("");

    intervalRef.current = setInterval(() => {
      if (i < maxLen) {
        // Replace character at i with either random char (to animate) or final char
        displayedChars = displayedChars.map((c, idx) => {
          if (idx < i) {
            // Already finalized characters from toText
            return toText[idx] || " ";
          } else if (idx === i) {
            // Currently animating this character: show random char
            return getRandomChar();
          } else {
            // Characters not reached yet: keep old char or space
            return displayedChars[idx];
          }
        });

        // Build React nodes with highlight on i-th character
        setTextElements(
          displayedChars.map((char, index) => {
            if (index === i) {
              const color = getRandomColor();
              return (
                <span
                  key={index}
                  className="font-mono transition-all inline-block"
                  style={{
                    color,
                    textShadow: `0 0 6px ${color}`,
                    transform: "rotateX(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  {char}
                </span>
              );
            }
            return (
              <span key={index} className="transition-all">
                {char}
              </span>
            );
          })
        );

        i++;
      } else {
        // Animation done: show full toText normally
        setTextElements(createTextSpans(toText));
        if (intervalRef.current) clearInterval(intervalRef.current);
        timeoutRef.current = setTimeout(callback, 2000);
      }
    }, 100);
  };

  useEffect(() => {
    // Animate from previous text to current text
    const previousText = textElements.length > 0 ? textElements.map(el => (typeof el === "string" ? el : el.props.children)).join("") : "";
    animateMorph(previousText, targetTexts[currentIndex], () => {
      setCurrentIndex((prev) => (prev + 1) % targetTexts.length);
    });

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  return (
    <section className="flex justify-center items-center text-center p-10 min-h-[6rem]">
      <div>
        <div
          className="text-4xl md:text-6xl font-bold font-mono tracking-wide mb-4"
          aria-live="polite"
        >
          {textElements.length > 0 ? textElements : null}
        </div>
        <p className="mt-6 text-xl md:text-2xl">
          Quick resources for{" "}
          <b className="text-sky-500 underline">Conquering the World of Coding</b>
        </p>
      </div>
    </section>
  );
}

export default Hero;
