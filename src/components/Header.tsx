import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Header = () => {
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
  return (
    <div className="flex justify-between items-center gap-10 p-10">
    
                <div className="hidden md:block">
                    <input
                    title="e"
                        type="checkbox"
                        className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
                        checked={theme === "synthwave"}
                        onChange={handleThemeChange}
                    />
                </div>
    
                <div className="gap-4 hidden md:flex">
                    <a href="https://www.github.com/hernandoabella/coding_king" target="_blank"><FaGithub className="h-6 w-6" /></a>
                    <a href="https://www.x.com/hernandoabella/coding_king" target="_blank"><FaXTwitter className="h-6 w-6" /></a>
                </div>
            </div>
  )
}

export default Header
