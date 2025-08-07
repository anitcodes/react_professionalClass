import React from "react";

const Profile = ({ name, age, location }) => {
  return (
    <>
      <h1>
        <ol>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          <li>Location: {location}</li>
        </ol>
      </h1>
    </>
  );
};

export default Profile;
