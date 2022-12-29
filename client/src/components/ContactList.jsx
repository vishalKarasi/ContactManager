import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputEl = useRef("");
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

  const getSearchTerm = () => {
    props.searchKey(inputEl.current.value);
  };

  return (
    <div className="container">
      <div className="flex content">
        <div className="subHead">Contact List</div>
        <Link to="/AddContact">
          <button type="submit" className="btn">
            New Contact
          </button>
        </Link>
        <div className="flex search">
          <div
            className="flex faSearch"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(".search").classList.toggle("active");
            }}
          >
            <FaSearch size="65%" color="crimson" />
          </div>
          <input
            ref={inputEl}
            type="search"
            id="input"
            placeholder="Search"
            value={props.term}
            onChange={getSearchTerm}
          />
          <div
            className="flex icon"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#input").value = "";
            }}
          >
            <FaTimes size="60%" color="crimson" />
          </div>
        </div>
      </div>
      {renderContactList.length > 0
        ? renderContactList
        : <div className="flex subHead"> No Contact Available </div>
        }
    </div>
  );
};

export default ContactList;
