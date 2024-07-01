// Action types
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

// Action creator for adding a new task
export const addTask = (task) => ({
  type: ADD_TASK,      // Action type indicating adding a task
  payload: task        // Payload containing the new task object
});

// Action creator for deleting a task
export const deleteTask = (taskId) => ({
  type: DELETE_TASK,   // Action type indicating deleting a task
  payload: taskId      // Payload containing the ID of the task to delete
});

// Action creator for editing a task
export const editTask = (taskId, newTask) => ({
  type: EDIT_TASK,     // Action type indicating editing a task
  payload: {           // Payload containing the task ID and the new task text
    taskId,
    newTask
  }
});

// Action creator for toggling the completion status of a task
export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,   // Action type indicating toggling the task completion status
  payload: taskId      // Payload containing the ID of the task to toggle
});
