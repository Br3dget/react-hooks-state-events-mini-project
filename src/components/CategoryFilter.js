import React, { useState } from 'react';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div>
        <button
          className={selectedCategory === 'All' ? 'selected' : ''}
          onClick={() => handleClick('All')}
        >
          All
        </button>
        <button
          className={selectedCategory === 'Work' ? 'selected' : ''}
          onClick={() => handleClick('Work')}
        >
          Work
        </button>
        <button
          className={selectedCategory === 'Personal' ? 'selected' : ''}
          onClick={() => handleClick('Personal')}
        >
          Personal
        </button>
        {/* Add more buttons as needed */}
      </div>
      {/* Other components */}
    </div>
  );
};

export default App;



