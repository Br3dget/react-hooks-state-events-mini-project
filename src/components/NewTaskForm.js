import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[1]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), 
      text: text,
      category: category
    };
    onTaskFormSubmit(newTask);
    setText(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.slice(1).map(category => ( // Exclude 'All' category
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;

