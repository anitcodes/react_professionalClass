import { useState } from "react";
import Name from "./components/Name";
import Color from "./components/Color";
import Hobby from "./components/Hobby";

function App() {
  const [name, setName] = useState();
  const [color, setColor] = useState();
  const [hobby, setHobby] = useState();

  return (
    <>
      <div className="box">
        <h1>Enter your details:</h1>

        <div className="box-contents">
          <h2>Full Name:</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <h2>Favorite Color:</h2>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />

          <h2>Hobby:</h2>
          <input
            type="text"
            value={hobby}
            onChange={(e) => {
              setHobby(e.target.value);
            }}
          />
        </div>

        {/* Passing props to child components */}
        <Name name={name} />
        <Color color={color} />
        <Hobby hobby={hobby} />
      </div>

      <button
        onClick={() => {
          setName("");
          setColor("");
          setHobby("");
        }}
        className="reset"
      >
        Reset
      </button>
    </>
  );
}

export default App;
