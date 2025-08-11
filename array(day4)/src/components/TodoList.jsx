import React from 'react'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li 
          key={todo.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
        >
          {/* Task title */}
          <span
            className={`flex-1 text-lg font-medium ${
              todo.isCompleted
                ? "line-through text-gray-500"
                : "text-gray-800"
            }`}
          >
            {todo.title}
          </span>

          <span
            className={`w-28 text-center px-3 py-1 rounded-full text-sm font-semibold ${
              todo.isCompleted
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {todo.isCompleted ? "Complete" : "Not Completed"}
          </span>

          {/* Toggle button */}
          <button
            onClick={() => toggleTodo(todo.id)}
            className="ml-3 px-4 py-2 bg-pink-500 cursor-pointer hover:bg-pink-600 text-white rounded transition"
          >
            Toggle
          </button>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="ml-3 px-4 py-2 bg-red-500 cursor-pointer hover:bg-red-600 text-white rounded transition"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
