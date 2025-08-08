import React, { useState } from "react";

const ToDos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Sleep", isCompleted: false },
    { id: 2, title: "Drink Water", isCompleted: true },
    { id: 3, title: "Play Volleyball", isCompleted: false },
    { id: 4, title: "Dance", isCompleted: false },
    { id: 5, title: "Coding", isCompleted: true },
  ]);

  const toggleTodo = (id) => {
    const updateTodo = todos.map(todo => {
        return todo.id === id?{
            ...todo,
            isCompleted: !todo.isCompleted
        } :todo
    })
    setTodos(updateTodo)
  }

  return (
    <>
      <div
        style={{
          height: "500px",
          width: "600px",
          background: "white",
        }}
      >
        <h1 style={{ textAlign: "center" }}>TO DO APP:</h1>

        <ul>
          {todos.map((todo, index) => {
            return (
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
                key={index}
              >
                <span>{todo.title}</span>

                <span
                  style={{
                    background: todo.isCompleted ? "green" : "red",
                    padding: "5px",
                  }}
                >
                  {todo.isCompleted ? "(Done)" : "(Pending)"}
                </span>

                <span>
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    style={{
                      padding: "10px",
                      background: "pink",
                      cursor: "poiter"
                    }}
                  >
                    Toogle
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ToDos;
