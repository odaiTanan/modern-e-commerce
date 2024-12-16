import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GET_USER, UPDATE_USER } from "../../api/api";
import { Axios } from "../../api/Axios";
import Button from "../../components/Button";

const UpdateUser = () => {
  const id = useParams().id;
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const res = Axios.get(GET_USER + id).then((res) => {
      setInputs({ name: res.data.name, email: res.data.email });
    });
  }, []);
  function handleInputs(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  async function submitFunction(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await Axios.post(UPDATE_USER + id, inputs);
      setLoading(false);
      nav("/dashboard/users");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <form className="dash-form" onSubmit={submitFunction}>
      <h1>Update User</h1>{" "}
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
          name
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
      <Button type="save" loading={loading} />
    </form>
  );
};

export default UpdateUser;
