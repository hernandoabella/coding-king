import React from "react";

const RightSideBar = () => {
  return (
    <div
      className="bg-base-300
    p-10 h-full right-side-bar fixed right-0"
    >
      <h3 className="font-bold">Related content</h3>
      <ul className="pl-2">
        <li>
          <a href="#" className="hover:underline text-sm hover:text-xl transition-all">
            Clean Code
          </a>
        </li>
        <li>
          <a href="#" className=" hover:underline text-sm hover:text-xl transition-all">
            Algorithms and Data Structures
          </a>
        </li>
        <li>
          <a href="#" className=" hover:underline text-sm hover:text-xl transition-all">
            Object Oriented Programming
          </a>
        </li>
        <li>
          <a href="#" className=" hover:underline text-sm hover:text-xl transition-all">
            Design Patterns
          </a>
        </li>
        <li>
          <a href="#" className=" hover:underline text-sm hover:text-xl transition-all">
            SOLID
          </a>
        </li>
        <li>
          <a href="#" className=" hover:underline text-sm hover:text-xl transition-all">
            Test Driven Data
          </a>
        </li>
        <li>
          <a href="#" className=" hover:underline text-sm hover:text-xl transition-all">
            Cyber Security
          </a>
        </li>
        <li>
          <a href="#" className=" hover:underline text-sm hover:text-xl transition-all">
            Artificial Inteligence
          </a>
        </li>
        <li>
          <a href="#" className=" hover:underline text-sm hover:text-xl transition-all">
            Soft Skills
          </a>
        </li>
        <li>
          <a href="https://github.com/hernandoabella/programming-terms-and-definitions" target="_blank" className=" hover:underline hover:text-xl transition-all text-sm">
            +200 Programming Terms and Definitions
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RightSideBar;
