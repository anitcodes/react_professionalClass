import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Anit Shrestha", phone: "9812345678", address: "Kalimati" },
    { id: 2, name: "Abiral Karki", phone: "9800120032", address: "Kalanki" },
  ]);

  const [contactToEdit, setContactToEdit] = useState(null);

  const addContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((c) => (c.id === updatedContact.id ? updatedContact : c))
    );
    setContactToEdit(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Manager</h1>
      <div className="w-full bg-white shadow-lg rounded-xl p-6">
        <ContactForm
          addContact={addContact}
          updateContact={updateContact}
          contactToEdit={contactToEdit}
        />
        <ContactList
          contact={contacts}
          deleteContact={deleteContact}
          setContactToEdit={setContactToEdit}
        />
      </div>
    </div>
  );
};

export default App;
