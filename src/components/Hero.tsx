import React, { useEffect, useState } from "react";

function Hero() {
    const [textElements, setTextElements] = useState<React.ReactNode[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const targetTexts = ["</Coding King>", "undefined", "We never give up!","⚠CRASH", "Learn and ship!"];
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?";
    const colors = ["#f87171", "#60a5fa", "#a78bfa", "#34d399", "#fbbf24", "#f472b6", "#38bdf8"];
    const fakeErrors = ["!404", "[ERR]", "undefined", "<NaN>", "⚠CRASH", "??///", "#%*!"];

    const getRandomChar = () => chars.charAt(Math.floor(Math.random() * chars.length));
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    const animateText = (text: string, callback: () => void) => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < text.length) {
                const currentChar =
                    text === "</Coding King>" && Math.random() < 0.3
                        ? fakeErrors[Math.floor(Math.random() * fakeErrors.length)]
                        : getRandomChar();

                const display = text.split("").map((char, index) => {
                    if (index < i) {
                        return (
                            <span key={index} className="transition-all duration-300 ease-in-out">
                                {char}
                            </span>
                        );
                    } else if (index === i) {
                        const color = getRandomColor();
                        return (
                            <span
                                key={index}
                                className="font-mono transition-all duration-500 ease-in-out inline-block"
                                style={{
                                    color,
                                    textShadow: `0 0 8px ${color}`,
                                    opacity: 0.9,
                                    transform: "rotateX(180deg)",
                                    backfaceVisibility: "hidden",
                                }}
                            >
                                {currentChar}
                            </span>
                        );
                    } else {
                        return (
                            <span
                                key={index}
                                className="opacity-0 transition-opacity duration-300 ease-in-out"
                            >
                                {char}
                            </span>
                        );
                    }
                });

                setTextElements(display);

                setTimeout(() => {
                    setTextElements((prev) => {
                        const updated = [...prev];
                        updated[i] = (
                            <span key={i} className="transition-all duration-300 ease-in-out">
                                {text[i]}
                            </span>
                        );
                        return updated;
                    });
                }, 300);

                i++;
            } else {
                const finalText = text.split("").map((char, index) => (
                    <span key={index} className="transition-all duration-300 ease-in-out">
                        {char}
                    </span>
                ));
                setTextElements(finalText);
                clearInterval(intervalId);

                setTimeout(callback, 2000); // wait before next text
            }
        }, 120);
    };

    useEffect(() => {
        animateText(targetTexts[currentIndex], () => {
            setCurrentIndex((prev) => (prev + 1) % targetTexts.length);
        });
    }, [currentIndex]);

    return (
        <div className="flex justify-center items-center text-center p-10">
            <div className="max-w-3xl" style={{ perspective: "1000px" }}>
                <div className="text-4xl md:text-6xl bg-gradient-to-t from-sky-500 to-sky-700 bg-clip-text text-transparent p-3 font-bold drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
                    {textElements}
                </div>
                <p className="mt-6 text-xl md:text-2xl">
                    Quick resources for <b className="text-sky-500 underline">Conquering the World of Coding</b>
                </p>
            </div>
        </div>
    );
}

export default Hero;
