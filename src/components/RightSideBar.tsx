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
          <a href="#" className="hover:underline">
            Clean Code
          </a>
        </li>
        <li>
          <a href="#" className=" hover:underline">
            Algorithms and Data Structure
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RightSideBar;
