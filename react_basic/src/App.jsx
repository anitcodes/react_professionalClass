import { useState } from "react";
import Name from "./components/Name";
import Color from "./components/Color";
import Hobby from "./components/Hobby";

function App() {
  // const [name, setName] = useState();
  // const [color, setColor] = useState();
  // const [hobby, setHobby] = useState();
  const [personDetail, setPersonDetail] = useState({
    name: "Anit",
    color: "Black",
    hobby: "Coding",
  });

  //function to handle stateChange
  const handleChange = (e, key) => {
    setPersonDetail((prevState) => {
      return {
        ...prevState,
        [key]: e.target.value,
      };
    });
  };

  return (
    <>
      <div className="box">
        <h1>Enter your details:</h1>

        <div className="box-contents">
          <h2>Full Name:</h2>
          <input
            type="text"
            value={personDetail.name}
            onChange={(e) => handleChange(e, "name")} //function call
          />

          <h2>Favorite Color:</h2>
          <input
            type="text"
            value={personDetail.color} //accessing object
            onChange={(e) => handleChange(e, "color")} //function call
          />

          <h2>Hobby:</h2>
          <input
            type="text"
            value={personDetail.hobby}
            onChange={(e) => handleChange(e, "hobby")} //function call
          />
        </div>

        {/* Passing props to child components */}
        <Name name={personDetail.name} />
        <Color color={personDetail.color} />
        <Hobby hobby={personDetail.hobby} />
      </div>

      <button
        className="reset"
        onClick={() =>
          setPersonDetail({
            name: "",
            color: "",
            hobby: "",
          })
        }
      >
        Reset
      </button>
    </>
  );
}

export default App;
