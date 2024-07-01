import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions';

// Initial state of the tasks array
const initialState = {
  tasks: []
};

// Reducer function for managing tasks state
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Case for adding a new task
      return {
        ...state,                                   // Spread the current state
        tasks: [...state.tasks, { ...action.payload, completed: false }]  // Add new task with completion status
      };
    case DELETE_TASK:
      // Case for deleting a task
      return {
        ...state,                                   // Spread the current state
        tasks: state.tasks.filter(task => task.id !== action.payload)  // Filter out the task to be deleted
      };
    case EDIT_TASK:
      // Case for editing a task
      return {
        ...state,                                   // Spread the current state
        tasks: state.tasks.map(task =>               // Map through tasks array
          task.id === action.payload.taskId ?        // Check if current task ID matches edited task ID
            { ...task, text: action.payload.newTask } : // Update task text if IDs match
            task                                    // Otherwise, return original task
        )
      };
    case TOGGLE_TASK:
      // Case for toggling the completion status of a task
      return {
        ...state,                                   // Spread the current state
        tasks: state.tasks.map(task =>               // Map through tasks array
          task.id === action.payload ?               // Check if current task ID matches toggled task ID
            { ...task, completed: !task.completed } :  // Toggle task completion status
            task                                    // Otherwise, return original task
        )
      };
    default:
      return state;                                 // Return current state if action type doesn't match
  }
};

export default taskReducer;
