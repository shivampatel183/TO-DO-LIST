const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo._id)}
          className="mr-2"
        />
        <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
      </div>
      <button
        onClick={() => deleteTodo(todo._id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
