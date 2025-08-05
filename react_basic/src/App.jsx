import { useState } from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

function App() {
  const [collegeName, setCollegeName] = useState();
  const [age, setAge] = useState();

  return (
    <>
      <h1>Props in REACT:</h1>
      <h2>College Name:</h2>
      <input
        type="text"
        value={collegeName}
        onChange={(e) => {
          setCollegeName(e.target.value);
        }}
      />

      <h2>Age:</h2>
      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <Component1 collegeName={collegeName} /> 
      <Component2 age={age} />
    </>
  );
}

export default App;
