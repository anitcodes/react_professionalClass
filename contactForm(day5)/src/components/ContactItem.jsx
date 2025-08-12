import React from "react";

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded shadow">
      <div>
        <h3 className="font-bold">{contact.name}</h3>
        <p>{contact.phone}</p>
        <p className="text-gray-500">{contact.address}</p>
      </div>
      <button
        onClick={() => deleteContact(contact.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
