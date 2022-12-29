import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../img/user.jpg";
const ContactDetails = (props) => {
  const location = useLocation();
  const contact = location.state.contact;
  return (
    <div className="flex col container">
      <div className="flex col card">
        <div className="img">
          <img src={user} alt="userImg" />
        </div>
        <div className="flex col info">
          <div className="head">{contact.name}</div>
          <div className="sub-head">{contact.email}</div>
        </div>
      </div>
      <Link to="/">
        <button className="btn">View Contact List</button>
      </Link>
    </div>
  );
};

export default ContactDetails;
