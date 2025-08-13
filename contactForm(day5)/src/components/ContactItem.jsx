import React from "react";

const ContactItem = ({ id, name, phone, address, deleteContact, setContactToEdit }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-xl shadow hover:bg-gray-200 transition">
      <div>
        <p className="font-medium text-gray-800">{name}</p>
        <p className="text-gray-600 text-sm">{phone}</p>
        <p className="text-gray-600 text-sm">{address}</p>
      </div>
      <div className="flex flex-col space-y-2">
        <button
          className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition"
          onClick={() => setContactToEdit({ id, name, phone, address })}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
