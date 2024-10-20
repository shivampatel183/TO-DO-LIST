'use client';

import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:5000/api/todos');
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async (text) => {
    const response = await fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const newTodo = await response.json();
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = async (id) => {
    const todoToToggle = todos.find((todo) => todo._id === id);
    const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !todoToToggle.completed }),
    });
    const updatedTodo = await response.json();
    setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">To-Do List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </main>
  );
}
