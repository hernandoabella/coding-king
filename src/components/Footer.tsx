import React from "react";

function Footer() {
  return (
    <div className="absolute right-10 bottom-10 rotate-90 origin-bottom-right">
      <footer>
        <div className="bg-gray-900 text-white px-4 py-2 shadow-lg rounded-md">
          <p className="text-sm font-semibold">
            &copy; Coding King {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
