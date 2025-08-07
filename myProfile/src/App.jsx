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
    <>
      <ProfileForm profile={profile} setProfile={setProfile} />
      <ProfileDisplay profile={profile} />
    </>
  );
};

export default App;
