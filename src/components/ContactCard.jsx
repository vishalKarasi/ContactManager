import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const ContactCard = (props) => {
  return (
    <div className="container">
      <div className="flex content">
        <div className="flex faUser">
          <FaUserCircle size="100%" color="5555f0" />
        </div>
        <div className="wrapper">
          <div className="name">{props.contact.name}</div>
          <div className="email">{props.contact.email}</div>
        </div>
        <div className="flex faTrash">
          <FaTrashAlt
            size="100%"
            color="crimson"
            onClick={() => {
              props.clickHandler(props.contact.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
