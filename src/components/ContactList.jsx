import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (ID) => {
    props.getContactId(ID);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.ID}
      />
    );
  });

  return (
    <div className="container">
      <div className="flex content">
        <div className="subHead">Contact List</div>
        <Link to="/AddContact">
          <button type="submit" className="btnAdd">
            Add New Contact
          </button>
        </Link>
      </div>
      {renderContactList}
    </div>
  );
};

export default ContactList;
