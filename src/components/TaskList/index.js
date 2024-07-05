// src/TaskList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo } from './actions';

const TaskList = ({ setEditId, setEditText }) => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <li key={todo.id} className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'list-group-item-success' : ''}`}>
          <span onClick={() => dispatch(toggleTodo(todo.id))} style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <div>
            <button className="btn btn-secondary btn-sm me-2" onClick={() => { setEditId(todo.id); setEditText(todo.text); }}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
