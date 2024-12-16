import React from "react";
import Button from "../components/Button";
import axios from "axios";
import { host, LOGOUT } from "../api/api";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import { Axios } from "../api/Axios";
const Logout = () => {
  const cookie = Cookie();
  const nav = useNavigate();
  async function handleLogout() {
    try {
      const res = await Axios.get(LOGOUT);
      nav("/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <button className="button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
