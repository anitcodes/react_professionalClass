import React, { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import ProfileDisplay from "./components/ProfileDisplay";

const App = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    address: "",
  });

  return (
    <div className="container">
      <div className="profile">
        <h1>Profile Card</h1>
        <ProfileForm profile={profile} setProfile={setProfile} />
        <ProfileDisplay profile={profile} />
      </div>
    </div>
  );
};

export default App;
