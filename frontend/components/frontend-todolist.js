import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
