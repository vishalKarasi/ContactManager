import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
  const [state, setState] = useState({
    id: "",
    name: "",
    email: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All field are mandatory");
      return;
    }
    props.addContactHandler(state);
    setState({ name: "", email: "" });
    const navigate = useNavigate();
    navigate("/");
  };

  return (
    <div className="container">
      <div className="subHead">Add Contact</div>
      <form onSubmit={add} className="flex form">
        <div className="field">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={state.name}
            onChange={handleInput}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            autoComplete="off"
            value={state.email}
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btnAdd">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
