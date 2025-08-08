import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: "Eat", isCompleted: true },
    { id: 2, title: "Code", isCompleted: true },
    { id: 3, title: "Dance", isCompleted: false },
    { id: 4, title: "Sleep", isCompleted: false },
    { id: 5, title: "Play", isCompleted: false },
  ]);

  return (
    <div className="container h-screen w-full bg-gray-300 flex items-center justify-center">
      <div className="todoContainer">
        <h1 className="text-4xl font-bold my-10 text-center">My To Do App</h1>
        <ul className="w-96 bg-gray-700 text-white px-6 py-4 rounded-xl space-y-4">
          {todo.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-md"
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold">{todo.id}.</span>
                <span className="capitalize">{todo.title}</span>
              </div>
              <span
                className={`h-4 w-4 rounded-full ${
                  todo.isCompleted ? "bg-green-500" : "bg-red-700"
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
