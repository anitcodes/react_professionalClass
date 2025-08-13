import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <h1 className="text-center my-4 text-3xl font-semibold">
        Contact Management System
      </h1>

      {contacts.map((c) => (
        <ContactItem key={c.id} contact={c} deleteContact={deleteContact} />
      ))}
    </>
  );
};

export default ContactList;
