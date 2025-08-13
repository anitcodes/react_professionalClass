import React from "react";

const ContactForm = () => {
  return (
    <div className="h-screen w-screen bg-gray-300 flex items-center justify-center">
      <div className="formContainer h-[calc(100%-10%)] w-[calc(100%-50%)] bg-white shadow-2xl rounded-xl">
        <h1 className="text-center py-4 text-3xl font-semibold">📑Contact Management System</h1>
        <form>
          <input type="text"  />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
