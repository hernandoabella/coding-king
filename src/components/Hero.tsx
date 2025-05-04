import React, { useEffect, useState } from "react";

function Hero() {
    const [textElements, setTextElements] = useState<React.ReactNode[]>([]);
    const targetText = "Coding King";
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const colors = ["#f87171", "#60a5fa", "#a78bfa", "#34d399", "#fbbf24", "#f472b6", "#38bdf8"];

    const getRandomChar = () => chars.charAt(Math.floor(Math.random() * chars.length));
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < targetText.length) {
                const currentChar = getRandomChar();
                const display = targetText.split("").map((char, index) => {
                    if (index < i) {
                        return (
                            <span key={index} className="font-bold">
                                {char}
                            </span>
                        );
                    } else if (index === i) {
                        return (
                            <span
                                key={index}
                                style={{ color: getRandomColor() }}
                                className="font-mono"
                            >
                                {currentChar}
                            </span>
                        );
                    } else {
                        return (
                            <span key={index} className="opacity-0">
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
                            <span key={i} className="font-bold">
                                {targetText[i]}
                            </span>
                        );
                        return updated;
                    });
                }, 300);

                i++;
            } else {
                const finalText = targetText.split("").map((char, index) => (
                    <span
                        key={index}
                        className="bg-gradient-to-b from-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold"
                    >
                        {char}
                    </span>
                ));
                setTextElements(finalText);
                clearInterval(intervalId);
            }
        }, 150);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-6 text-center bg-base-100 relative overflow-hidden">
            {/* Glow Background */}
            <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px] z-0"></div>
            <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-3xl top-[500px] left-[500px] z-0"></div>
            <div
                className="z-10 max-w-3xl"
            >
                <div className="text-4xl md:text-6xl font-extrabold tracking-wider">
                    {textElements}
                </div>

                <p className="mt-6 text-xl md:text-2xl">
                    Quick resources for <em className="italic text-purple-500">conquering the world of coding</em>
                </p>
            </div>
        </div>
    );
}

export default Hero;
