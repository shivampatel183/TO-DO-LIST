import { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
