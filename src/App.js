import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import DateTime from './components/DateTime';
import './styles.css';

// App component representing the main application structure
const App = () => {
  return (
    <div className="app">
      <h1>To-Do App</h1>
      <DateTime />       {/* Rendering DateTime component for displaying date and time */}
      <TaskInput />      {/* Rendering TaskInput component for adding new tasks */}
      <TaskList />       {/* Rendering TaskList component for displaying list of tasks */}
    </div>
  );
};

export default App;
