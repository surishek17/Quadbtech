import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

// TaskInput component for adding new tasks
const TaskInput = () => {
  // State to hold the input value for the new task
  const [task, setTask] = useState('');
  
  // useDispatch hook to get the dispatch function from Redux
  const dispatch = useDispatch();

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Check if the input is not empty
    if (task.trim()) {
      // Create a new task object with id, text, and timestamp
      const newTask = {
        id: Date.now(), // Use current timestamp as unique id
        text: task, // Task text from input
        timestamp: new Date().toLocaleString() // Add current date and time as timestamp
      };
      
      // Dispatch the addTask action with the new task object
      dispatch(addTask(newTask));
      
      // Clear the input field after adding the task
      setTask('');
    }
  };

  return (
    <div className="task-input">
      {/* Input field for entering a new task */}
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
      />
      {/* Button to add the new task */}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
