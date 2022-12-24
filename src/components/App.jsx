import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import uuid from "react-uuid";
import "../style/App.scss";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // function to get id from ContactList
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  // function to remove contacts
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // function to set and get contacts from local storage
  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const retriveContact = JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retriveContact) {
      setContacts(retriveContact);
    }
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="AddContact"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
