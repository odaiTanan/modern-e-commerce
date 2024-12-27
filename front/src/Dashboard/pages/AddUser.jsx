import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADD_USER } from "../../api/api";
import { Axios } from "../../api/Axios";
import Button from "../../components/Button";

const AddUser = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  function handleInputs(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  console.log(inputs);
  async function submitFunction(event) {
    event.preventDefault();
    console.log(inputs);
    setLoading(true);
    try {
      const res = await Axios.post(ADD_USER, inputs);
      setLoading(false);
      nav("/dashboard/users");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <form className="dash-form" onSubmit={submitFunction}>
      <h1>Add User</h1>{" "}
      <div className="dash-div">
        {" "}
        <input
          type="text"
          placeholder=" "
          name="name"
          value={inputs.name}
          required
          onChange={handleInputs}
        />
        <label htmlFor="email" className="inputLabel">
          User Name
        </label>
      </div>
      <div className="dash-div">
        {" "}
        <input
          type="email"
          placeholder=" "
          name="email"
          value={inputs.email}
          required
          onChange={handleInputs}
        />
        <label htmlFor="email" className="inputLabel">
          Email
        </label>{" "}
      </div>
      <div className="dash-div">
        {" "}
        <input
          type="password"
          placeholder=" "
          name="password"
          value={inputs.password}
          required
          onChange={handleInputs}
          minLength={6}
        />
        <label htmlFor="email" className="inputLabel">
          Password
        </label>{" "}
      </div>
      <div className="dash-div">
        {" "}
        <select
          className="form"
          name="role"
          value={inputs.role}
          onChange={handleInputs}
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value={1995}>admin</option>
          <option value={2001}>user</option>
          <option value={1996}>writer</option>
        </select>
      </div>
      <Button type="Add" loading={loading} />
    </form>
  );
};

export default AddUser;
