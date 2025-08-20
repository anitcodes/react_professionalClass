import { useState } from "react"

const App = () => {
  const [name, setName] = useState("")

  const IPerson = {
    name: "",
    age: 0
  }

  return (
    <>
    <h2>Name: {name}</h2>
    </>
  )
}

export default App