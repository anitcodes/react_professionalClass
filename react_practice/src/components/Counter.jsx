// UseState in React

import React, { useState } from "react";

const Counter = () => {
  // Declare state variable and updater function
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counterShow">
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </>
  );
};

export default Counter;
