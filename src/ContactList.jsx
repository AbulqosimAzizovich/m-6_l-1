import React from "react";
import useContactStore from "./ContactStore";

function ContactList() {
  const contacts = useContactStore((state) => state.contacts);

  return (
    <div>
      <h2 className=" text-center font-bold text-[32px] mb-5">Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong>Name:</strong> {contact.name}, <strong>Email:</strong>{" "}
            {contact.email}, <strong>Telephone:</strong> {contact.telephone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
