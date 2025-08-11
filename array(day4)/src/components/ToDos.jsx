import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const ToDos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Sleep", isCompleted: false },
    { id: 2, title: "Drink Water", isCompleted: true },
    { id: 3, title: "Play Volleyball", isCompleted: false },
    { id: 4, title: "Dance", isCompleted: false },
    { id: 5, title: "Coding", isCompleted: true },
  ]);

  // Add new todo
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]); // new todos at the start
  };

  // Toggle status
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
          TO DO APP
        </h1>

        <AddTodo addTodo={addTodo} /> 

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default ToDos;
