import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !address) return;
    addContact({ name, phone, address });
    setName("");
    setPhone("");
    setAddress("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 mb-6 bg-white p-4 rounded shadow"
    >
      <input
        className="border-2 border-gray-400 rounded p-2 flex-1"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border-2 border-gray-400 rounded p-2 flex-1"
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        className="border-2 border-gray-400 rounded p-2 flex-1"
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default ContactForm;
