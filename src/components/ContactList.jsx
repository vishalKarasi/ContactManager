import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="container">
      <div className="subHead">Contact List</div>
      <Link to="/AddContact">
        <button type="submit" className="btnAdd">
          Add New Contact
        </button>
      </Link>
      {renderContactList}
    </div>
  );
};

export default ContactList;
