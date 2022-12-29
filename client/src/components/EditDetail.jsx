import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditDetail = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const contact = location.state.contact;
  const [state, setState] = useState({
    id: contact.id,
    name: contact.name,
    email: contact.email,
  });

  // fetching and storing user info
  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const updateData = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All field are mandatory");
      return;
    }
    props.updateContactHandler(state);
    setState({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="subHead">Edit Contact</div>
      <form method="post" onSubmit={updateData} className="flex form">
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
        <button type="submit" className="btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditDetail;
