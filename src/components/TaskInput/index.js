// src/TaskInput.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from './actions';

const TaskInput = ({ editId, setEditId, initialText }) => {
  const [input, setInput] = useState(initialText || '');
  const dispatch = useDispatch();

  useEffect(() => {
    setInput(initialText || '');
  }, [initialText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      if (editId) {
        dispatch(editTodo(editId, input));
        setEditId(null);
      } else {
        dispatch(addTodo(input));
      }
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="btn btn-primary" type="submit">
        {editId ? 'Edit' : 'Add'}
      </button>
    </form>
  );
};

export default TaskInput;
