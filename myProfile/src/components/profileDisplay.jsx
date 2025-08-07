import React from 'react'

const ProfileDisplay = ({profile}) => {
  return (
    <div className="profileDisplay">
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Address: {profile.address}</p>
    </div>
  )
}

export default ProfileDisplay