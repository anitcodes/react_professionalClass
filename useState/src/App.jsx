import React, { useState } from "react";

const App = () => {
  const [personDetail, setPersonDetail] = useState({
    name: "",
    age: "",
    caste: "",
  });

  return (
    <>
      <h1>Enter your Personal Details</h1>

      <div className="box">
        <h2>Full Name:</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={personDetail.name}
          onChange={(e) =>
            setPersonDetail(() => {
              return {
                ...personDetail,
                name: e.target.value,
              };
            })
          }
        />
      </div>

      <p>Your name is {personDetail.name}</p>
    </>
  );
};

export default App;
