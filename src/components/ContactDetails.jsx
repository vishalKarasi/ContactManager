import React from "react";
import { Link } from "react-router-dom";
import user from "../img/user.jpg";
const ContactDetails = () => {
  return (
    <div className="container flex-c-c">
      <div className="card flex-sa-c">
        <div className="img">
          <img src={user} alt="" srcset="" />
        </div>
        <div className="content flex-c-c">
          <div className="head">Vishal</div>
          <div className="sub-head">vk@gmail.com</div>
        </div>
      </div>
      <Link to="/">
        <button className="btnAdd">View Contact List</button>
      </Link>
    </div>
  );
};

export default ContactDetails;
