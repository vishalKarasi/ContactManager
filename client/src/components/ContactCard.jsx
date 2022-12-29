import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaTrashAlt, FaEdit } from "react-icons/fa";

const ContactCard = (props) => {
  return (
    <div className="container">
      <div className="flex content">
        <div className="faUser">
          <Link
            to={`ContactDetails/${props.contact.id}`}
            state={{ contact: props.contact }}
          >
            <FaUserCircle size="100%" color="5555f0" />
          </Link>
        </div>
        <div className="wrapper">
          <div className="name">{props.contact.name}</div>
          <div className="email">{props.contact.email}</div>
        </div>
        <div className="faicon">
          <Link to={`EditDetail`} state={{ contact: props.contact }}>
            <FaEdit size="100%" color="55AE54" />
          </Link>
        </div>
        <div className="faicon">
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
