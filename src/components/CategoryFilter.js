import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button 
          key={category} 
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;