import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';

const TASK = [
  { id: 1, text: 'Task 1', category: 'Work' },
  { id: 2, text: 'Task 2', category: 'Personal' },
];

const CATEGORY = ['All', 'Work', 'Personal'];

const App = () => {
  const [tasks, setTasks] = useState(TASK);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory === 'All' ? tasks : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter
        categories={CATEGORY}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <TaskList
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
      />
      <NewTaskForm
        categories={CATEGORY}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
    </div>
  );
};

export default App;
