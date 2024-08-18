import React from 'react';

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div>
      {categories.map(category => (
        <button 
          key={category} 
          onClick={() => onSelectCategory(category)}
          className={category === selectedCategory ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;


