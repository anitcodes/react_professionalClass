import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setusers(data);
    console.log(data);
  };

  return (
    <>
      <button
        onClick={getUsers}
        className="px-4 py-2 bg-green-600 m-4 rounded text-white font-bold cursor-pointer hover:bg-green-700"
      >
        Get Data
      </button>

      <div className="mt-2 p-8 bg-zinc-100">
        <ul>
          {users.map((e) => {
            return <li>{e.username}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
