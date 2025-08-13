import React, { useState, useEffect } from "react";

const ContactForm = ({ addContact, updateContact, contactToEdit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setPhone(contactToEdit.phone);
      setAddress(contactToEdit.address);
    } else {
      setName("");
      setPhone("");
      setAddress("");
    }
  }, [contactToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !address) return;

    if (contactToEdit) {
      updateContact({ id: contactToEdit.id, name, phone, address });
    } else {
      addContact({ name, phone, address });
    }

    setName("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-3"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />
        <button
          type="submit"
          className={`px-5 rounded-lg text-white font-semibold shadow-md transition ${
            contactToEdit
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {contactToEdit ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
