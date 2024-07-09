import React, { useState } from "react";

function CategoryDropdown({ categories, activeCategory, onChange }) {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    onChange(newCategory);
  };

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="
      btn m-1 btn-outline"
      >
        {selectedCategory || "Select Category"}
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        {categories.map((category, index) => (
          <li key={index}>
            <input
              type="radio"
              name="category-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={category}
              value={category}
              checked={selectedCategory === category}
              onChange={handleCategoryChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDropdown;
