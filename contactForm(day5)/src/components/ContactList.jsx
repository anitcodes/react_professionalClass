import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="space-y-4">
      {contacts.length === 0 ? (
        <p className="text-gray-600 text-center">No contacts yet.</p>
      ) : (
        contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      )}
    </div>
  );
};

export default ContactList;
