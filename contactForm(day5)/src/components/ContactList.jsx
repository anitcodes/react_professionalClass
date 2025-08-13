import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contact, deleteContact, setContactToEdit }) => {
  return (
    <div className="flex flex-col space-y-3">
      {contact.length === 0 ? (
        <p className="text-center text-gray-400">No contacts found</p>
      ) : (
        contact.map((c) => (
          <ContactItem
            key={c.id}
            id={c.id}
            name={c.name}
            phone={c.phone}
            address={c.address}
            deleteContact={deleteContact}
            setContactToEdit={setContactToEdit}
          />
        ))
      )}
    </div>
  );
};

export default ContactList;
