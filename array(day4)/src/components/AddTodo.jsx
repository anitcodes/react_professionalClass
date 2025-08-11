import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [titleErr, setTitleErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (title.trim() === "") {
      setTitleErr("Please enter the title first");
      return;
    }
    if (title.length > 20) {
      setTitleErr("Title is too long, please enter less than 20 characters");
      return;
    }

    // Add todo if valid
    addTodo(title);
    setTitle("");
    setTitleErr("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setTitleErr(""); // clear error on typing
        }}
        placeholder="Enter new todo..."
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
      >
        Add
      </button>

      {titleErr && (
        <p className="text-red-500 text-sm mt-2 w-full">{titleErr}</p>
      )}
    </form>
  );
};

export default AddTodo;
