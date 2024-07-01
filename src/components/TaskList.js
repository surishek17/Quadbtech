import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

// TaskList component for displaying the list of tasks
const TaskList = () => {
  // useSelector hook to access tasks array from Redux store state
  const tasks = useSelector((state) => state.tasks);
  
  // useDispatch hook to get the dispatch function from Redux
  const dispatch = useDispatch();

  // Function to handle deleting a task
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch deleteTask action with taskId
  };

  // Function to handle editing a task
  const handleEdit = (taskId) => {
    const newTask = prompt("Edit task:"); // Prompt user for new task text
    if (newTask) {
      dispatch(editTask(taskId, newTask)); // Dispatch editTask action with taskId and new task text
    }
  };

  // Function to handle toggling task completion status
  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId)); // Dispatch toggleTask action with taskId
  };

  // Render the TaskList component
  return (
    <ul className="task-list">
      {/* Map through tasks array and render each task as an <li> element */}
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <div>
            {/* Task text with onClick handler to toggle completion status */}
            <span onClick={() => handleToggle(task.id)}>{task.text}</span>
            {/* Timestamp of the task */}
            <small className="timestamp">{task.timestamp}</small>
          </div>
          {/* Edit button with onClick handler to edit the task */}
          <button className="edit-btn" onClick={() => handleEdit(task.id)}>Edit</button>
          {/* Delete button with onClick handler to delete the task */}
          <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
