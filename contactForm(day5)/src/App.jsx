import React, { useState } from "react";
import ContactList from "./components/ContactList";

const App = () => {
  //lifting up the state
  const [contacts, setcontacts] = useState([
    { id: 1, name: "Anit Shrestha", phone: "9877636273", address: "Kalimati" },
    { id: 2, name: "Sudip Dahal", phone: "9874886641", address: "Chabahel" },
    {
      id: 3,
      name: "Shalin Raj Satyal",
      phone: "9877620284",
      address: "Bhaktapur",
    },
  ]);

  const deleteContact = (id) => {
    setcontacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </>
  );
};

export default App;
