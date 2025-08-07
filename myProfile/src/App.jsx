import React, { useState } from 'react'

const App = () => {
  const[profile, setProfile] = useState({
    name: "",
    age: "",
    address: ""
  })

  return (
   <>
   <h1>This is App</h1>
   </>
  )
}

export default App