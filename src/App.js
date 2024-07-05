// src/App.js
import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  return (
    <div className="container">
      <h1 className="my-4 text-center">Todo App</h1>
      <TaskInput editId={editId} setEditId={setEditId} initialText={editText} />
      <TaskList setEditId={setEditId} setEditText={setEditText} />
    </div>
  );
};

export default App;
