import React from "react";

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <div className="container flex items-center justify-center">
      <div className="p-4 bg-red-100 flex items-center gap-20 pl-10 mt-4 w-[calc(100%-30%)]">
        <h3>{contact.id}</h3>
        <h3>{contact.name}</h3>
        <h3>{contact.phone}</h3>
        <h3>{contact.address}</h3>
        <button className="px-8 py-2 bg-green-500 text-white rounded outline-none cursor-pointer hover:bg-green-600">
          Edit
        </button>
        <button
          className="px-8 py-2 bg-red-500 text-white rounded outline-none cursor-pointer hover:bg-red-600"
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
