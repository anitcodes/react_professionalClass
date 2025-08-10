import React, { useState } from "react";

const ToDos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Sleep", isCompleted: false },
    { id: 2, title: "Drink Water", isCompleted: true },
    { id: 3, title: "Play Volleyball", isCompleted: false },
    { id: 4, title: "Dance", isCompleted: false },
    { id: 5, title: "Coding", isCompleted: true },
  ]);

  //function to toogle done and pending option
  const toggleTodo = (id) => {
    const updateTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updateTodo);
  };

  // function to delete item
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
          TO DO APP
        </h1>

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
                {todo.isCompleted ? "Done" : "Pending"}
              </span>

              {/* Toggle button */}
              <button
                onClick={() => toggleTodo(todo.id)}
                className="ml-3 px-4 py-2 bg-pink-500 cursor-pointer hover:bg-pink-600 text-white rounded transition"
              >
                Toggle
              </button>

              <button
                onClick={() => {
                  deleteTodo(todo.id);
                }}
                className="ml-3 px-4 py-2 bg-red-500 cursor-pointer hover:bg-red-600 text-white rounded transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDos;
