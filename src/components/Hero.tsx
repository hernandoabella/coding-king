"use client";

import React, { useEffect, useState, useRef, ReactNode, ReactElement } from "react";

function Hero() {
  const [textElements, setTextElements] = useState<ReactNode[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const targetTexts = ["Coding King", "undefined", "We never give up!", "Quick resources", "Conquer the World of Coding!"];
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?";
  const colors = ["#0EA5E9"];

  const getRandomChar = () => chars.charAt(Math.floor(Math.random() * chars.length));
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

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
        <span key={index} className="transition-all" style={{ opacity: 1 }}>
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
        displayedChars = displayedChars.map((c, idx) => {
          if (idx < i) {
            return toText[idx] || " ";
          } else if (idx === i) {
            return getRandomChar();
          } else {
            return displayedChars[idx];
          }
        });

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
        setTextElements(createTextSpans(toText));
        if (intervalRef.current) clearInterval(intervalRef.current);
        timeoutRef.current = setTimeout(callback, 2000);
      }
    }, 100);
  };

  // Función para extraer texto plano de ReactNode[] sin errores
  function getTextFromReactNodes(nodes: ReactNode | ReactNode[]): string {
    if (typeof nodes === "string") {
      return nodes;
    } else if (Array.isArray(nodes)) {
      return nodes.map(getTextFromReactNodes).join("");
    } else if (React.isValidElement(nodes)) {
      return getTextFromReactNodes(nodes.props.children);
    } else {
      return "";
    }
  }

  useEffect(() => {
    const previousText = getTextFromReactNodes(textElements) || "";
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
      </div>
    </section>
  );
}

export default Hero;
