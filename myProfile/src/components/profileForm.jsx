import React from "react";

const ProfileForm = ({ profile, setProfile }) => {
  const handleChange = (e, key) => {
    setProfile((prevState) => {
      return {
        ...prevState,
        [key]: e.target.value,
      };
    });
  };

  return (
    <div className="profileContainer">
      <h1>Enter your Details:</h1>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          value={profile.name}
          onChange={(e) => handleChange(e, "name")}
        />
        <input
          type="text"
          placeholder="Enter your age"
          value={profile.age}
          onChange={(e) => handleChange(e, "age")}
        />
        <input
          type="text"
          placeholder="Enter your address"
          value={profile.address}
          onChange={(e) => handleChange(e, "address")}
        />
      </form>
    </div>
  );
};

export default ProfileForm;
