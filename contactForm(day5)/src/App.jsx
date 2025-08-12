import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.floor(Math.random() * 1000000), ...contact }
    ]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-red-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Manager</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
