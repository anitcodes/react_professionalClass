import React, { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, {title,desc}]);
    setTitle("")
    setDesc("")
    console.log(mainTask)
  };

  let renderTask = <h2>No Task Available</h2>

  renderTask = mainTask.map((t,i) =>{
    return <div className="flex justify-between">
        <h5>{t.title}</h5>
        <h5>{t.desc}</h5>
    </div>
  })
  return (
    <>
      <h1 className="py-4 bg-black text-white text-center text-4xl font-semibold">
        My To DO APP
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="border-2 border-gray-800 m-4 p-2 w-80"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-2 border-gray-800 m-4 p-2 w-80"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 font-bold rounded ml-4 cursor-pointer hover:bg-gray-700">
          Add Todos
        </button>
      </form>
      <hr />

      <div className="p-8 bg-slate-200">
        <ul>
            {renderTask}
        </ul>
      </div>
    </>
  );
};

export default TodoForm;
