import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddContact = (props) => {
  // creating user obj
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  // fetching and storing user info
  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All field are mandatory");
      return;
    }
    props.addContactHandler(state);
    setState({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="subHead">Add Contact</div>
      <form onSubmit={postData} className="flex form">
        <div className="flex field">
          <input
            type="text"
            name="name"
            required="required"
            value={state.name}
            onChange={getData}
          />
          <span className="label">Name</span>
        </div>
        <div className="flex field">
          <input
            type="text"
            name="email"
            required="required"
            value={state.email}
            onChange={getData}
          />
          <span className="label">Email</span>
        </div>
        <button type="submit" className="btnAdd">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
