import { createStore } from 'redux';
import taskReducer from './reducers';

// Function to load persisted state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks'); // Retrieve serialized state from localStorage
    return serializedState ? JSON.parse(serializedState) : undefined; // Parse and return state if available, otherwise return undefined
  } catch (e) {
    console.error(e); // Log any errors that occur during state loading
    return undefined; // Return undefined if an error occurs
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state); // Convert state to a JSON string
    localStorage.setItem('tasks', serializedState); // Save serialized state to localStorage under 'tasks' key
  } catch (e) {
    console.error(e); // Log any errors that occur during state saving
  }
};

// Load persisted state from localStorage
const persistedState = loadState();

// Create Redux store with taskReducer and persistedState
const store = createStore(taskReducer, persistedState);

// Subscribe to store changes to save state to localStorage
store.subscribe(() => {
  saveState(store.getState()); // Save current state to localStorage whenever the store updates
});

export default store; 
