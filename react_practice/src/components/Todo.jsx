import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: "Eat", isCompleted: true },
    { id: 2, title: "Code", isCompleted: true },
    { id: 3, title: "Dance", isCompleted: false },
    { id: 4, title: "Sleep", isCompleted: true },
    { id: 5, title: "Play", isCompleted: false },
  ]);

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📝 To Do App</h2>
      <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
        {todo.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              marginBottom: "10px",
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              fontFamily: "sans-serif",
              fontSize: "18px",
            }}
          >
            <span
              style={{
                textDecoration: item.isCompleted ? "line-through" : "none",
                color: item.isCompleted ? "gray" : "black",
              }}
            >
              {item.title}
            </span>
            <span
              style={{
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "14px",
                fontWeight: "bold",
                backgroundColor: item.isCompleted ? "#d4edda" : "#fff3cd",
                color: item.isCompleted ? "#155724" : "#856404",
              }}
            >
              {item.isCompleted ? "Done" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
