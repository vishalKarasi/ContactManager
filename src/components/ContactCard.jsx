import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const ContactCard = (props) => {
  return (
    <div className="container">
      <div className="flex content">
        <div className="faUser">
          <Link
            to="ContactDetails/${props.contacID}"
            state={{ contact: props.contact }}
          >
            <FaUserCircle size="100%" color="5555f0" />
          </Link>
        </div>
        <div className="wrapper">
          <div className="name">{props.contact.name}</div>
          <div className="email">{props.contact.email}</div>
        </div>
        <div className="faTrash">
          <FaTrashAlt
            size="100%"
            color="crimson"
            onClick={() => {
              props.clickHandler(props.contact.ID);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
