import React, { useEffect, useState } from "react";

function Hero() {
    const [textElements, setTextElements] = useState<React.ReactNode[]>([]);
    const targetText = "</Coding King>";
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?";
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
                            <span key={index} >
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
                            <span key={i}>
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
        <div className="flex justify-center items-center text-center">
            
            <div
                className="max-w-3xl">
                <div className="text-4xl md:text-6xl bg-gradient-to-t from-sky-500 to-sky-700 bg-clip-text text-transparent p-3 font-bold">
                    {textElements}
                </div>

                <p className="mt-6 text-xl md:text-2xl">
                    Quick resources for <b className="text-sky-500">Conquering the World of Coding</b>
                </p>
            </div>
        </div>
    );
}

export default Hero;
