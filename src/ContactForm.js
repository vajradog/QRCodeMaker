import React, { useState } from "react";

function ContactForm({ onSubmit }) {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    url: "",
    address: "",
    socialProfiles: "",
    notes: "",
  });

  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  return (
    <form
      onSubmit={(e) => onSubmit(e, contact)}
      className="flex flex-col space-y-4"
    >
      <input
        className="border p-2 rounded"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={contact.firstName}
        onChange={handleChange}
        required
      />
      <input
        className="border p-2 rounded"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={contact.lastName}
        onChange={handleChange}
      />

      <input
        className="border p-2 rounded"
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={contact.phone}
        onChange={handleChange}
      />
      <input
        className="border p-2 rounded"
        type="email"
        name="email"
        placeholder="Email Address"
        value={contact.email}
        onChange={handleChange}
      />
      <input
        className="border p-2 rounded"
        type="url"
        name="url"
        placeholder="URL"
        value={contact.url}
        onChange={handleChange}
      />
      <textarea
        className="border p-2 rounded"
        name="address"
        placeholder="Address"
        value={contact.address}
        onChange={handleChange}
      ></textarea>
      <input
        className="border p-2 rounded"
        type="text"
        name="socialProfiles"
        placeholder="Social Profiles"
        value={contact.socialProfiles}
        onChange={handleChange}
      />
      <textarea
        className="border p-2 rounded"
        name="notes"
        placeholder="Notes"
        value={contact.notes}
        onChange={handleChange}
      ></textarea>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Generate QR Code
      </button>
    </form>
  );
}

export default ContactForm;
