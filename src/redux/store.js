// src/store.js
import { createStore } from 'redux';
import todoReducer from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
  todoReducer,
  persistedState
);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

export default store;
